import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../../helpers/getProduct";


export const ProductDetail = () => {

  const {slug} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProduct();
      const found = products.find((p) => p.slug === slug);
      setProduct(found);
    };
    fetchProduct();
  }, [slug]);


  if(!product) {
    return (
      <h4>Producto no encontrado 404</h4>
    );
  }
  return (
  <div className="container py-5">
  <div className="row g-4">
    <div className="col-md-6">
      <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: 400, objectFit: "cover" }}
      />
    </div>
    <div className="col-md-6 d-flex flex-column justify-content-center">
      <h2 className="fw-bold mb-3" style={{ color: "#025067" }}>{product.name}</h2>
      <h4 className="mb-3" style={{ color: "#b31b6f" }}>{product.price} PEN</h4>
      <p className="mb-4 text-muted">{product.longDescription || "Sin descripción."}</p>
        <div>
          <button className="btn btn-primary me-2">Agregar al carrito</button>
          <Link to="/tienda" className="btn btn-outline-secondary">Volver al catálogo</Link>
        </div>
      </div>
    </div>
  </div>
  );
}