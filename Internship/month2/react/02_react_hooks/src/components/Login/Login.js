import React, { useState, useEffect, useReducer,useContext } from "react";

// imported files
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
// css files
import classes from "./Login.module.css";

//reducer function
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};
const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    console.log("Effect running..");
    return console.log("effect cleanup");
  });
 
  // useEffect(() => {
  //   const identifier = setTimeout(() => {

  //     // console.log("form validating");
  //   }, 300);

  //   return () => {
  //     console.log("clean up ");
  //     clearTimeout(identifier);
  //   };
  // }, [emailState.value, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      event.target.value.includes("@") && passwordState.value.trim().length > 6
    );
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
        type="email"
          id="email"
          variable={emailState}
         name={'Email'}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
        type="password"
          id="password"
          variable={passwordState}
         name={'Password'}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
