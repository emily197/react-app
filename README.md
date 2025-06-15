# React + Vite
Para el desarrollo de la tarea dado que se tenia Redux instalado:

## 1. Se creo un layout para la tienda
```
import HeaderMenu from "../../components/HeaderMenu";
import { Outlet } from "react-router-dom";
import { FooterMenu } from "../../components/FooterMenu";

export const TiendaLayout = () => (
  <>
      <HeaderMenu />
      <Outlet />
      <FooterMenu />
  </>
);
```
## 2. Una vez definido esto se creo el cartSlice para las acciones del carrito
```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //agregar productos
    addItem(state, action) {
      const prod = action.payload;
      const exist = state.items.find(item => item.id === prod.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...prod, quantity: 1 });
      }
    },
    //eliminar
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    //limpior carrito
    cleanItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, cleanItems } = cartSlice.actions;
export default cartSlice.reducer;
```
## 3. Creamos los componentes vacios y adaptamos App.js para que soporte el layout 
```
// App.jsx
import { Routes, Route } from 'react-router-dom';
import { Principal } from './Principal';
import { HomeApp } from './pages/HomeApp';
import { MarvelGrid } from './pages/MarvelPage';
import { Likes } from './pages/LikesPage';
import { PomodoroPage } from './pages/PomodoroPage';
import { ProductDetail } from './components/catalogo-prod/ProductDetail';
import {ProductPage} from './pages/ProductPage';
import { ListadoPage } from './pages/ListadoPage';
import { TiendaLayout } from './pages/Layout/TiendaLayout';
import { Catalogo } from './components/catalogo-prod/Catalogo';
import { CarCheckout } from './components/catalogo-prod/CarCheckout';

function App() {
  return (
    <Routes>
      {/* Layout principal con Outlet */}
      <Route path="/" element={<Principal />}>
        <Route index element={<HomeApp />} />      
        <Route path="movies" element={<MarvelGrid/>} />
        <Route path="likes" element={<Likes />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
        <Route path="tienda" element={<TiendaLayout />} >
          <Route index element={<Catalogo />} />
          <Route path=":slug" element={<ProductDetail />} /> 
          <Route path="checkout" element={<CarCheckout />} />      
        </Route>
        <Route path="formulario" element={<ProductPage />} />
         <Route path="formulario/:id" element={<ProductPage />} />
        <Route path="admin" element={<ListadoPage />} />
      </Route>
    </Routes>
  );
}

export default App;

```
## 4. Se habilito los botones de agregar directamente en la vista catalogo, pero se trabajo en el archivo Product, para lo cual se utizo el cartSlice, dado que todos los metodos estan almacenados en ese archivo como lo sugiere Redux.
```
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { Link } from "react-router-dom";

export const Product = ({data}) => {
  const dispatch = useDispatch()

  return ( 
    <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 border-0 shadow-sm"> 
        <Link to={`/tienda/${data.slug}`} className="text-decoration-none">
        <img
          src={data.image}
          className="card-img-top"
          alt={data.name}
          style={{ objectFit: "cover", height: "180px", borderRadius: "1rem 1rem 0 0" }}
        />
        </Link>     
        <div className="ps-2 d-flex flex-column">
          <p className="mb-1 fw-semibold" style={{ color: "#025067" }}>
            {data.name}
          </p>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="mb-0">
              {data.price} PEN
            </span>
          </div>
        </div>
        <div className="d-grid gap-2 m-2">
          <button 
            onClick={() => dispatch(addItem(data))}
            className="btn btn-primary btn-sm">Agregar</button>
        </div>
      </div>
    </div>
  );
}
```
## 5. Se creo un boton en el menu superior para poder ver el incremento de los productos añadidos en el carrito. Al mismo tiempo, ese boton levanta el modal para ver un resumen de la compra.
 ```
 import React, { useState } from "react";
import { CarShop } from "./catalogo-prod/CarShop";
import { useSelector } from "react-redux";

export function HeaderMenu() {

  const [showCart, setShowCart] = useState(false);
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
<>
      <nav className="navbar bg-body-tertiary bg-dark rounded shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold fs-4">React-Vite + Redux</a>
          <div className="d-flex align-items-center" role="search">
            <button
              className="btn btn-outline-light position-relative"
              type="button"
              onClick={() => setShowCart(true)}
              style={{ fontSize: "1.5rem" }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <CarShop show={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}

export default HeaderMenu;

 ```

 ## 6. Con respecto al modal, se encuentra en el archivo CarShop, el cual tambien tienes unas validaciones en caso de seleccionarlo estando vacio, en caso contrario se muestra un resumen de los productos seleccionados, si desea continuar con la compra lo deriva a otra vista, la cual es Checkout.
```
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";

export const CarShop = ({ show, onClose }) => {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div
      className={`offcanvas offcanvas-end ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{
        visibility: show ? "visible" : "hidden",
        background: "#fff",
        transition: "visibility 0.2s, right 0.2s",
        zIndex: 1050,
      }}
      aria-labelledby="offcanvasCartLabel"
    >
      <div className="offcanvas-header">
        <p className="fw-bold">Tienes agregados {totalItems} productos</p>
        <span></span>
        <button
          type="button"
          className="btn-close text-reset"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="offcanvas-body">
        {items.map( item => (
          <div key={ item.id } className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={ item.image } className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{ item.name }</h6>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">{ item.quantity } { item.unit }</p>
                    <p className="card-text">PEN { item.price * item.quantity }</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
       { totalItems !==0 ? (
        <p><strong>Total: </strong>{totalPrice}</p>
       ): (
        <h4>Carrito vacio</h4>
       )}   
       
      </div>
      { totalItems !==0 ? (
      <div className="d-grid gap-2 m-2">
        <Link to={`/tienda/checkout`} className="btn btn-primary btn-md">
          Continuar
        </Link>
      </div>
      ): null}
    </div>
  );
};
```
## 7. La vista checkout contiene un resumen mas completo de la compra, puede eliminar los productos o tiene una redireccion en caso desea volver al catalogo.

```
import { useSelector, useDispatch } from "react-redux";
import { removeItem, cleanItems } from "../../store/cartSlice";
import { Link } from "react-router-dom";

export const CarCheckout = () => {
  const items = useSelector(state => state.cart.items);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const dispatch = useDispatch();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">PRODUCTO</th>
                <th scope="col">PRECIO</th>
                <th scope="col">CANT</th>
                <th scope="col">TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { items.map( item => (
              <tr key={ item.id }>
                <th>{ item.name }</th>
                <td>{ item.price }</td>
                <td>{ item.quantity }</td>
                <td>{ item.price * item.quantity }</td>
                <td>
                  <button 
                    onClick={() => dispatch(removeItem(item.id))}
                    className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-x"></i>
                  </button>
                </td>
              </tr>                
              ))}
            </tbody>
          </table>

          {totalItems !== 0 ? (
          <button 
            onClick={() => dispatch(cleanItems())}
            className="btn btn-danger me-2"
          >
            Eliminar compra
          </button>
          ): null}
          <Link to="/tienda" className="btn btn-outline-primary">Seguir comprando ..</Link>
        </div>
        <div className="col-md-4">
          <div class="card mt-3">
            <div class="card-body">
              <div className="row">
                <div className="col-md-6">
                  Subtotal
                </div>
                <div className="col-md-6 text-end">
                  S/ {(totalPrice * 0.18).toFixed(2)}
                </div>
                <div className="col-md-6">
                  Total
                </div>
                <div className="col-md-6 text-end">
                  S/ {totalPrice.toFixed(2)}
                </div>
              </div>
              
            </div>
          </div>
          <div className="d-grid gap-2 m-2">
            {totalItems !== 0 ? (
            <button className="btn btn-primary btn-md" onClick={() => {alert('No tengo esto aun construido 🥲')} }>
              Continuar
            </button>
            ): null}
          </div>

        </div>
      </div>
    </div>

  );

}
```
### Información para el desarrollador
```
npm run dev
json-server --watch db.json --port 3000
```

