import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import {authActions} from "../store/Auth";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler} type='button'>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
