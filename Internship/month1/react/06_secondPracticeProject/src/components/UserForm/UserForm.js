import React from "react";

// imported files
import PopUp from "../common/popup/PopUp";

// css files
import classes from "./UserForm.module.css";

const initialInvestment = {
  username: "",
  age: "",
};

const UserForm = ({ onAddData }) => {
  const [error, setError] = React.useState(false);

  const [userInput, setUserInput] = React.useState(initialInvestment);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [input]: value,
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
    <div>
      <form className={classes.form}>
        <p>
          <label className={classes.label}>Username</label>
          <input
            className={classes.input}
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
          <input
            className={classes.input}
            id="age"
            type="text"
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            value={userInput["age"]}
          />
        </p>
        {error && (
          // <p style={{ color: "red", fontSize: "19px" }}>
          //   Please fill all fields
          // </p>
          <PopUp errorHandler={error} valueOfAge={userInput["age"]}/>
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
