import { useEffect, useState } from "react";
import { getProduct } from "../../helpers/getProduct";
import { Link, useParams } from "react-router-dom";
import { Product } from "./Product";

export const Catalogo = () => {
  const [products, setProducts] = useState([]);
  //const [slug] = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProduct();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center" style={{ color: "#025067" }}>
        Catálogo de Productos
      </h2>
      <div className="row g-4">
        {products.map((product) => (
          <Product key={product.id} data={product}/>
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