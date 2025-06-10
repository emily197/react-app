import { Link } from "react-router-dom";

export const Product = ({data}) => {

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
        <div className="card-body d-flex flex-column">
          <p className="mb-2 fw-semibold" style={{ color: "#025067" }}>
            {data.name}
          </p>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="mb-0">
              {data.price} PEN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}