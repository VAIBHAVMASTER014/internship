// import React, { ChangeEvent, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// // css files
// import "./Signup.css";
// import { toastFuncSuccess } from "../../util/ToastFunc";

// const initialData = {
//   name: "",
//   email: "",
//   password: "",
//   cpassword: "",
// };

// const Signup = () => {
//   const [form, setForm] = React.useState(initialData);
//   const formField = [
//     {
//       lableName: "Full Name",
//       name: "name",
//       type: "text",
//       id: "fname",
//       value: form.name,
//       placeholder: "Enter full name",
//     },
//     {
//       lableName: "Email",
//       name: "email",
//       type: "email",
//       id: "email",
//       value: form.email,
//       placeholder: "Enter email",
//     },
//     {
//       lableName: "Password",
//       name: "password",
//       type: "password",
//       id: "password",
//       value: form.password,
//       placeholder: "Enter password",
//     },
//     {
//       lableName: "Confirm Password",
//       name: "cpassword",
//       type: "password",
//       id: "cpassword",
//       value: form.cpassword,
//       placeholder: "Enter same password",
//     },
//   ];
//   const [error, setError] = useState({
//     name: false,
//     email: false,
//     password: false,
//     cpassword: false,
//   });

//   const showError = error.name || error.email || error.password || error.cpassword;

//   const [errorMsg, setErrorMsg] = useState(initialData);
//   const navigate = useNavigate();

//   const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.value.length === 0) {
//       setError(true);
//     } else {
//       setForm({ ...form, [event.target.name]: event.target.value });
//       setError(false);
//     }
//   };
//   const buttonbehave =
//     form.name.length > 0 &&
//     form.email.length > 0 &&
//     form.cpassword.length > 0 &&
//     form.password.length > 0;

//   function nameValidation() {
//     if (form.name.length < 3) {
//       setErrorMsg({ ...errorMsg, name: "Name must be at least 3 characters" });
//       setError({ ...error, name: true });
//     } else {
//       setErrorMsg({ ...errorMsg, name: "" });
//       setError({ ...error, name: false });
//     }
//   }

//   function emailValidation() {
//     const regex =
//       /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
//     if (!regex.test(form.email)) {
//       setErrorMsg({ ...errorMsg, email: "Email is not valid" });
//       setError({ ...error, email: true });
//     } else {
//       setErrorMsg({ ...errorMsg, email: "" });
//       setError({ ...error, email: false });
//     }
//   }
//   function passwordValidation() {
//     const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

//     if (regex.test(form.password)) {
//       setErrorMsg({
//         ...errorMsg,
//         password:
//           "Password must contain one digit, one small ,one capital alphabet and length between 8 to 16",
//       });
//       setError({ ...error, password: true });
//     } else {
//       setErrorMsg({ ...errorMsg, password: "" });
//       setError({ ...error, password: false });
//     }
//   }
//   function confirmPasswordValidation() {
//     if (form.password !== form.cpassword) {
//       setErrorMsg({ ...errorMsg, cpassword: "Passwords do not match" });
//       setError({ ...error, cpassword: true });
//     } else {
//       setErrorMsg({ ...errorMsg, cpassword: "" });
//       setError({ ...error, cpassword: false });
//     }
//   }

//   const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     nameValidation();
//     emailValidation();
//     passwordValidation();
//     confirmPasswordValidation();

//     if(!error){
//         localStorage.setItem("registerData", JSON.stringify(form));
//         toastFuncSuccess("Register successfull");
//         navigate("/");
//     }

//   };
//   return (
//     <div className="container">
//       <div className="header">
//         <span>Sign Up</span>
//         <p>It's free and only takes a minute</p>
//       </div>
//       <form className="form-content" onSubmit={submitHandler}>
//         {formField.map((field, index) => (
//           <div className="field" key={index}>
//             <label className={error ? "form-invalid-lable" : "form-lable"}>
//               {field.lableName}
//             </label>
//             <br />
//             <input
//               type={field.type}
//               id={field.id}
//               name={field.name}
//               placeholder={field.placeholder}
//               onChange={inputHandler}
//             />
//             {}
//             {showError && (
//               <p className="error-msg">{errorMsg[{...Object.keys(Object.keys(field).find(fieldName => fieldName === field.name))}[0]]}</p>
//             )}
//           </div>
//         ))}
//         <button
//           disabled={!buttonbehave}
//           className={buttonbehave ? "btn" : "invalid-btn"}
//           type="submit"
//         >
//           Sign Up
//         </button>
//       </form>
//       <div className="footer">
//         <p>
//           already registered before?
//           <NavLink to="/login">
//             <span> LogIn</span>
//           </NavLink>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { ChangeEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// css files
import "./Signup.css";
import { toastFuncSuccess } from "../../util/ToastFunc";

type FormData = {
  [key: string]: string; // This allows any string as a key and string as value
};

const initialData: FormData = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const Signup = () => {
  const [form, setForm] = useState<FormData>(initialData);
  const navigate = useNavigate();

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  console.log(errors)
  const showError = Object.values(errors).some((error) => error !== "");

  const isValidForm = Object.values(form).every((x) => x !== "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
    setErrors(initialData)
  };

  const validateField = (name: string, value: string) => {
    let errorMsg = "";

    switch (name) {
      case "name":
        errorMsg = value.length < 3 ? "Name must be at least 3 characters" : "";
        break;
      case "email":
        errorMsg =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i.test(
            value
          )
            ? ""
            : "Email is not valid";
        break;
      case "password":
        errorMsg =
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(
            value
          )
            ? ""
            : "Password must be 8 characters long, include an uppercase letter, a number, and a special character";
        break;
      case "cpassword":
        errorMsg = value === form.password ? "" : "Passwords do not match";
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidForm) {
      localStorage.setItem("registerData", JSON.stringify(form));
      toastFuncSuccess("Register successful");
      navigate("/login");
    } else {
     
      Object.keys(form).forEach((name) => {
        validateField(name, form[name as keyof typeof form]);
      });
    }
  };

  const formFields = [
    {
      labelName: "Full Name",
      name: "name",
      type: "text",
      id: "fname",
      placeholder: "Enter full name",
    },
    {
      labelName: "Email",
      name: "email",
      type: "email",
      id: "email",
      placeholder: "Enter email",
    },
    {
      labelName: "Password",
      name: "password",
      type: "password",
      id: "password",
      placeholder: "Enter password",
    },
    {
      labelName: "Confirm Password",
      name: "cpassword",
      type: "password",
      id: "cpassword",
      placeholder: "Enter same password",
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <span>Sign Up</span>
        <p>It's free and only takes a minute</p>
      </div>
      <form className="form-content" onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div className="field" key={index}>
            <label
              className={
                errors[field.name] ? "form-invalid-label" : "form-label"
              }
            >
              {field.labelName}
            </label>
            <br />
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              value={form[field.name as keyof typeof form]}
              placeholder={field.placeholder}
              onChange={handleChange}
              className={errors[field.name] ? "input-error" : ""}
            />
            {showError && <p className="error-msg">{errors[field.name]}</p>}
          </div>
        ))}
        <button
          disabled={!isValidForm}
          className={isValidForm ? "btn" : "invalid-btn"}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="footer">
        <p>
          Already registered?
          <NavLink to="/login">
            <span> Log In</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
