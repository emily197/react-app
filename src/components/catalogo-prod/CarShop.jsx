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