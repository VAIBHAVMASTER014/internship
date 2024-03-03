import React, { useState, useRef } from "react";

// css files
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 6;

const Checkout = ({ onCancle, onConfirm }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal_code: true,
    city: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalcodeInput = useRef();
  const cityInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostal_code = postalcodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreeIsValid = !isEmpty(enteredStreet);
    const enteredPostalcodeIsValid = isFiveChars(enteredPostal_code);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreeIsValid,
      postal_code: enteredPostalcodeIsValid,
      city: enteredCityIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalcodeIsValid &&
      enteredStreeIsValid;

    if (!formIsValid) {
      return;
    }
    onConfirm({
      name: nameInput.current.value,
      street: streetInput.current.value,
      postal_code: postalcodeInput.current.value,
      city: cityInput.current.value,
    });

    nameInput.current.value = "";
    streetInput.current.value = "";
    postalcodeInput.current.value = "";
    cityInput.current.value = "";
  };

  return (
    <div className={classes.form}>
      <form className={classes["form-control"]} onSubmit={submitHandler}>
        <div className={classes["form-group"]}>
          <label
            htmlFor="name"
            className={!formInputsValidity.name ? classes["form-error"]:""}
          >
            Name
          </label>
          <input
            ref={nameInput}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
          {!formInputsValidity.name && (
            <p className={classes["form-error"]}>Please enter a valid name</p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <label
            htmlFor="street"
            className={!formInputsValidity.street ? classes["form-error"]:""}
          >
            Street
          </label>
          <input
            ref={streetInput}
            type="text"
            id="street"
            placeholder="Enter Street"
          />
          {!formInputsValidity.street && (
            <p className={classes["form-error"]}>Please enter a valid Street</p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <label
            htmlFor="postal-code"
            className={!formInputsValidity.postal_code ? classes["form-error"]:""}
          >
            Postal code
          </label>
          <input
            ref={postalcodeInput}
            type="text"
            id="postal-code"
            placeholder="Enter postal code"
          />
          {!formInputsValidity.postal_code && (
            <p className={classes["form-error"]}>
              Please enter a valid postal code
            </p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <label
            htmlFor="city"
            className={!formInputsValidity.city ? classes["form-error"]:""}
          >
            City
          </label>
          <input
            ref={cityInput}
            type="text"
            id="city"
            placeholder="Enter city"
          />
          {!formInputsValidity.city && (
            <p className={classes["form-error"]}>
              Please enter a valid city name
            </p>
          )}
        </div>
        <div className={classes["form-btn"]}>
          <button type="button" onClick={onCancle}>
            Cancle
          </button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
