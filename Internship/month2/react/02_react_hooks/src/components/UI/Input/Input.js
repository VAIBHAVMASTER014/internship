import React from "react";
import classes from "../../Login/Login.module.css";

const Input = ({ type, id, variable,name, onChange, onBlur }) => {
  return (
    <div
      className={`${classes.control} ${
        variable.isValid === false ? classes.invalid : ""
      }`}
    >
      <label >{name}</label>
      <input
        type={type}
        id={id}
        value={variable.value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
