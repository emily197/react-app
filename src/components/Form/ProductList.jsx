import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, removeProduct } from "../../store/productsSlice";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: products, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
      await dispatch(removeProduct(id));
    }
  };

  const handleEdit = (prod) => {
    navigate(`/formulario/${prod.id}`);
  };

  return (
    <>
      <h2>Lista de productos</h2>
      {loading && <div> Cargando...</div>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CATEGORIA</th>
            <th>SLUG</th>
            <th>PRECIO</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, idx) => (
            <tr key={prod.id}>
              {/* ... */}
              <th scope="row">{idx + 1}</th>
              <td>{ prod.name }</td>
              <td>{ prod.categoryId }</td>
              <td>{ prod.slug }</td>
              <td>{ prod.price }</td>
              <td>
                <button onClick={() => handleEdit(prod)} className="btn btn-outline-warning me-2">Editar</button>
                <button onClick={() => handleDelete(prod.id)} className="btn btn-outline-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

