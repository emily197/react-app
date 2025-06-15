import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from "../../store/productsSlice";
import { Product } from "./Product";


export const Catalogo = () => {
  const dispatch = useDispatch();

  const { items: products, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center" style={{ color: "#025067" }}>
        Catálogo de Productos 
      </h2>
      {loading && <div> Cargando...</div>}
      <div className="row g-4">
        {products.map((product, idx) => (
          <Product key={product.id || idx}  data={product}/>
        ))}
        {products.length === 0 && (
          <div className="col-12 text-center text-muted py-5">
            
            <div className="spinner-border text-primary mb-3" role="status"></div>
            <div>Cargando productos...</div>
          </div>
        )}
      </div>
    </div>
  );

};