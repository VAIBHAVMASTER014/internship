import React from "react";

// imported files
import Input from "../common/Input/Input";
// css files
import classes from "./UserForm.module.css";

const initialInvestment = {
  username: "",
  age: "",
};

const UserForm = ({ onAddData }) => {

  const [error, setError] = React.useState(false);
  const [userInput, setUserInput] = React.useState(initialInvestment);
  const fields = [
    {
      label: {
        name: "Username",
      },
      input: {
        type: "text",
        value: userInput["username"],
        placeholder: "Enter username",
        onChange: (event) => inputChangeHandler("username", event.target.value),
        id: "username",
      },
    },
    {
      label: {
        name: "Age",
      },
      input: {
        type: "number",
        value: userInput["age"],
        placeholder: "Enter age",
        onChange: (event) => inputChangeHandler("age", event.target.value),
        id: "age",
      },
    },
  ];

  const inputChangeHandler = (input, value) => {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [input]: value,
        id: Math.random().toString()
      };
    });
    setError(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    onAddData(userInput);
    setUserInput(initialInvestment);
  };
  const errorOnSubmit = (event) => {
    event.preventDefault();
    setError(true);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        {fields.map((field) => (
          <p>
            <label className={classes.label}>{field.label.name}</label>
            <Input
              id={field.input.id}
              type={field.input.type}
              value={field.input.value}
              placeholder={field.input.placeholder}
              onChange={field.input.onChange}
            />
          </p>
        ))}
        {/* <p>
          <label className={classes.label}>Username</label>
          <Input
            id="username"
            type="text"
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
            value={userInput["username"]}
          />
        </p>
        <p>
          <label className={classes.label}>Age</label>
          <Input
            className={classes.input}
            id="age"
            type="number"
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            value={userInput["age"]}
          />
        </p> */}
        {error && (
          <p style={{ color: "red", fontSize: "19px" }}>
            Please fill all fields
          </p>
        )}
        <button
          className={
            userInput["username"].length > 0 && Number(userInput["age"]) > 0
              ? classes["button"]
              : classes["disable-btn"]
          }
          type="submit"
          onClick={
            userInput["username"].length > 0 && Number(userInput["age"]) > 0
              ? submitHandler
              : errorOnSubmit
          }
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
