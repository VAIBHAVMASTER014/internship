import React from "react";

import classes from './form.module.css'



const defaultUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = ({onCalculate}) => {
  const [userInput, setUserInput] = React.useState(defaultUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
  };
  const inputChangeHandler = (input, value) => {
    console.log(value);
    setUserInput((prevData) => {
      return {
        ...prevData,
        [input]: +value,
      };
    });
  };
  const resetHandler = () => {
    setUserInput(defaultUserInput);
  };

  return (
    <div>
      <form className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
              id="duration"
            />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button} onClick={submitHandler}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
