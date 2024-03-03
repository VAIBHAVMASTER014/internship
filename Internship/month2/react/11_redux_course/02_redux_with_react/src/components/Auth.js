import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

// css files
import classes from "./Auth.module.css";

// imported files
import { authActions } from "../store/Auth";

const Auth = () => {
  const dispatch = useDispatch();

  const emailInput = useRef();
  const passwordInput = useRef();

  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    setEnteredData({
      email: enteredEmail,
      password: enteredPassword,
    });

    if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
      return;

    }
    dispatch(authActions.login());
    
    
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailInput} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={passwordInput} type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
