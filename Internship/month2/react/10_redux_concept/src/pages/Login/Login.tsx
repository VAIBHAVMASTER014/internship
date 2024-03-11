import React, { ChangeEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// imported files
import { useAppDispatch } from "../../redux/foodSlice";
import { validate } from "../../redux/cartSlice";
import { toastFuncSuccess } from "../../util/ToastFunc";

// css file
import "../Signup/Signup.css";

type FormData = {
  [key: string]: string; // This allows any string as a key and string as value
};

const initialData: FormData = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = React.useState<FormData>(initialData);
  const navigate = useNavigate();
  const formField = [
    {
      lableName: "Email",
      name: "email",
      type: "email",
      id: "email",
      value: form.email,
      placeholder: "Enter email",
    },
    {
      lableName: "Password",
      name: "password",
      type: "password",
      id: "password",
      value: form.password,
      placeholder: "Enter password",
    },
  ];

  const [errors, setErrors] = useState<FormData>({
    email: "",
    password: "",
  });
  const isValidForm =
    Object.values(errors).every((x) => x === "") &&
    Object.values(form).every((x) => x !== "");

  const showError = Object.values(errors).some((x) => x !== "");

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(initialData)
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
      navigate("/");
    } else {
      if (
        validData["password"] !== form["password"] &&
        validData["email"] !== form["email"]
      ) {
        setErrors({
          ...errors,
          password: "Invalid password",
          email: "Invalid email",
        });
      } else if (validData["email"] !== form["email"]) {
        setErrors({ ...errors, email: "Invalid email" });
      } else {
        setErrors({ ...errors, password: "Invalid password" });
      }
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
              {showError && <p className="error-msg">{errors[field.name]}</p>}
            </div>
          ))}
          <button
            disabled={!isValidForm}
            type="submit"
            className={isValidForm ? "btn" : "invalid-btn"}
          >
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
