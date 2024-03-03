import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// css file
import "./Navbar.css";
const Navbar = () => {
  const [itemAdded, setItemAdded] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <NavLink to="/">
            <span className="logo">
              <FontAwesomeIcon icon={faHotel} /> Noodletown
            </span>
          </NavLink>
        </div>
        <div className="cart-menu">
          <NavLink to="/menu">
            <span className="nav-menu">Menu</span>
          </NavLink>
          <NavLink to="/cart">
            {" "}
            {itemAdded ? (
              <div className="nav-cart">
                <p className="cart-totalItems">2</p>
                <FontAwesomeIcon icon={faCartShopping} shake />
              </div>
            ) : (
              <div className="nav-cart">
                <p className="cart-totalItems">2</p>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
