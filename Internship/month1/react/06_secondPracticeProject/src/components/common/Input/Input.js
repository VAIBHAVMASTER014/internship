import React from 'react'

// css files
import classes from './Input.module.css'

const Input = ({type, value, placeholder, onChange, id}) => {
  return (
    <input type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} className={classes.input}/>
  )
}

export default Input