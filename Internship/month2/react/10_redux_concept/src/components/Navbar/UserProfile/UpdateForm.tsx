import React, { ChangeEvent } from "react";
import { toastFuncSuccess } from "../../../util/ToastFunc";
import { useNavigate } from "react-router-dom";

// imported files
import "../../../pages/Signup/Signup.css";

const UpdateProfile: React.FC = () => {
  const validData = JSON.parse(localStorage.getItem("registerData") || "hello");
  const initialData = {
    name: "",
    email: "",
    password: validData["password"],
    cpassword: validData["cpassword"],
  };

  const [form, setForm] = React.useState(initialData);
  const formField = [
    {
      lableName: "Full Name",
      name: "name",
      type: "text",
      id: "fname",
      value: form.name,
      placeholder: "Enter full name",
    },
    {
      lableName: "Email",
      name: "email",
      type: "email",
      id: "email",
      value: form.email,
      placeholder: "Enter email",
    },
  ];

  const navigate = useNavigate();

  const buttonbehave = form.name.length > 0 && form.email.length > 0;
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("registerData", JSON.stringify(form));
    toastFuncSuccess("Profile edited successfully");
    setForm(initialData);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="header">
        <span>Edit profile</span>
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
              placeholder={field.placeholder}
              onChange={inputHandler}
            />
          </div>
        ))}
        <div className="update-profile-btn">
          <button
            className={buttonbehave ? "btn" : "invalid-btn"}
            type="submit"
          >
            Edit
          </button>
          <button className="btn" type="button" onClick={() => navigate("/")}>
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
