import React from 'react'

// imported files
import classes from './PopUp.module.css'
const PopUp = ({errorHandler, valueOfAge}) => {
  return (
    <>
    <div className = {classes.bg}>
    <div className={errorHandler ? classes["invisible"] : classes["pop-up"]}>
        <lable>{errorHandler && 'Invalid input'}</lable>
        <p>{valueOfAge < 0 ? 'Please enter valid age ( > 0).': 'Please enter a valid Username and age(non-empty values).'}</p>
        <button className={classes.button}>Okay</button>
    </div>
    </div>
    </>
  )
}

export default PopUp