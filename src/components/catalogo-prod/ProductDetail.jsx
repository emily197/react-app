import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { useEffect } from "react";
import { useParams, Link  } from "react-router-dom";
import { fetchProductBySlug, clearSelectedProduct } from "../../store/productsSlice";

export const ProductDetail = () => {
  const {slug} = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductBySlug(slug));
    return () => dispatch(clearSelectedProduct());
  }, [dispatch, slug]);

  if (loading || !selectedProduct) return <div>Cargando...</div>;
  
  return (  
  <div className="container py-5">
    <div className="row g-4">
      <div className="col-md-6">
        <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: 400, objectFit: "cover" }}
        />
      </div>
    <div className="col-md-6 d-flex flex-column justify-content-center">
      <h2 className="fw-bold mb-3" style={{ color: "#025067" }}>{selectedProduct.name}</h2>
      <h4 className="mb-3" style={{ color: "#b31b6f" }}>{selectedProduct.price} PEN</h4>
      <p className="mb-4 text-muted">{selectedProduct.longDescription || "Sin descripción."}</p>
        <div>
          <button 
            onClick={() => dispatch(addItem(selectedProduct))}
            className="btn btn-primary me-2">Agregar al carrito</button>
          <Link to="/tienda" className="btn btn-outline-secondary">Volver al catálogo</Link>
        </div>
      </div>
    </div>
  </div>
  );
}
