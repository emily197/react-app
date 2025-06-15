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