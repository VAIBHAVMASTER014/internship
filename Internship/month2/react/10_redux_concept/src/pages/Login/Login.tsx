import React, { ChangeEvent} from "react";
import "../Signup/Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/foodSlice";
import { validate } from "../../redux/cartSlice";

import { toastFuncSuccess, toastFuncWarn } from "../../util/ToastFunc";
const initialData = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = React.useState(initialData);
  const navigate = useNavigate();
  const formField = [
    {
      lableName: "Email",
      name: "email",
      type: "email",
      id: "email",
      value:form.email,
      placeholder: "Enter email",
    },
    {
      lableName: "Password",
      name: "password",
      type: "password",
      id: "password",
      value:form.password,
      placeholder: "Enter password",
    },
  ];
  const buttonBehaviour = form.email.length>0 && form.password.length>0

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validData = JSON.parse(
      localStorage.getItem("registerData") || "hello"
    );
    if (
      validData["email"] === form["email"] &&
      validData["password"] === form["password"]
    ) {
      dispatch(validate(true));
      toastFuncSuccess("login done successfully");
      console.log("login success");
      navigate("/");
    } else {
      console.log("login failes")
      toastFuncWarn("Login failed enter data again");
      setForm(initialData)
    }
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <span>LogIn</span>
        </div>
        <form className="form-content" onSubmit={submitHandler}>
          {formField.map((field) => (
            <div className="field">
              <label className="form-lable">{field.lableName}</label>
              <br />
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                value={field.value}
                placeholder={field.placeholder}
                onChange={inputHandler}
              />
            </div>
          ))}
          <button disabled={!buttonBehaviour} type="submit" className={buttonBehaviour ? "btn" : "invalid-btn"}>
            Log In
          </button>
        </form>
        <div className="footer">
          <p>
            Not registered yet?
            <NavLink to="/signup">
              <span> SignUp</span>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
