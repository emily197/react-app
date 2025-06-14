import { useEffect, useState } from "react";
import { getProduct, deleteProduct } from "../../helpers/getProduct";
import { Link, useNavigate } from 'react-router-dom';


export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
        const data = await getProduct();
        setProducts(data);
        console.log(data);
    } catch (error) {
        setProducts([]);
        console.error("Error fetching products", error);
      }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const editProduct = (prod) => {
    navigate(`/formulario/${prod.id}`);
  }

  const destroyProduct = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  }


  return (
    <>
      <h2>CRUD de Producto</h2>
      <div className="container">
        <div className="d-flex flex-row-reverse bd-highlight">
          <Link to="/formulario" className="btn btn-primary" aria-current="page">
          Nuevo
          </Link>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#3</th>
              <th scope="col">Producto</th>
              <th scope="col">Categoria</th>
              <th scope="col">slug</th>
              <th scope="col">Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
            <tr key={prod.id}>
              <th scope="row">1</th>
              <td>{ prod.name }</td>
              <td>{ prod.categoryId }</td>
              <td>{ prod.slug }</td>
              <td>{ prod.price }</td>
              <td>
                <button 
                  onClick={() => editProduct(prod)}
                  type="button" 
                  className="btn btn-outline-warning me-2">
                  Editar
                </button>
                <button 
                  onClick={() => destroyProduct(prod.id)}
                  type="button" 
                  className="btn btn-outline-danger">
                  Eliminar
                </button>
              </td>
            </tr>              
            ))}
          </tbody>
        </table>
      </div>
    </>
  );



}