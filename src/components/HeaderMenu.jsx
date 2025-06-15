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
