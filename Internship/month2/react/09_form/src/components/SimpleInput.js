import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    setNameIsValid(true);
    setEnteredName(event.target.value);
  };
  const inputName = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredVaule = inputName.current.value;
    if (enteredVaule.trim() === "") {
      setNameIsValid(false);
      return;
    }
    console.log(enteredName);
    inputName.current.value = "";
  };
  const focusHandler = () => {
    if(!inputName.current.value){
      setNameIsValid(false); 
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameIsValid ? "form-control" : "form-control invalid"}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputName}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={focusHandler}
        />
        {!nameIsValid && <p className="error-text">Name is not valid.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
