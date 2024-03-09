import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

// imported files
import { useAppSelector } from "../../redux/foodSlice";
import UserProfile from "./UserProfile/UserProfile";

// css file
import "./Navbar.css";

const Navbar = () => {
  const [itemAdded, setItemAdded] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState(false);
  const totalitems = useAppSelector((state) => state.cart.totalItem);
  const verifiedUser = useAppSelector((state) => state.cart.valid);
  useEffect(() => {
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 300);
  }, [totalitems]);

  const totalItem = useAppSelector((state) => state.cart.totalItem);

  const visibilityHandler = () => {
    setProfileVisibility((prevState) => !prevState);
  };

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
          {verifiedUser ? (
            <>
              {itemAdded ? (
                <>
                  <div className="after-login">
                    <NavLink to="/cart">
                      <div className="nav-cart">
                        <p className="cart-totalItems">{totalItem}</p>
                        <FontAwesomeIcon icon={faCartShopping} shake />
                      </div>
                    </NavLink>
                    <div className="nav-btn" onClick={visibilityHandler}>
                      <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                  </div>
                  {profileVisibility && (
                    <UserProfile onHideProfile={visibilityHandler} />
                  )}
                </>
              ) : (
                <>
                  <div className="after-login">
                    <NavLink to="/cart">
                      <div className="nav-cart">
                        <p className="cart-totalItems">{totalItem}</p>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </div>
                    </NavLink>
                    <div className="nav-btn" onClick={visibilityHandler}>
                      <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                  </div>
                  {profileVisibility && (
                    <UserProfile onHideProfile={visibilityHandler} />
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <div className="nav-btn" onClick={visibilityHandler}>
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              {profileVisibility && (
                <UserProfile onHideProfile={visibilityHandler} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
