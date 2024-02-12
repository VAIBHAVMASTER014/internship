import React from 'react'

// imported files
import HeaderCartButton from './HeaderCartButton'
// imported css files
import classes from './Header.module.css'
// imported images
import mealImg from '../../assets/meals.jpg'
const Header = ({onShowCart}) => {
  return (
    <>
    <header className={classes.header}>
    <h1>WebMeals</h1>
    <HeaderCartButton onClick={onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealImg} alt="meals"  />
    </div>
    </>
  )
}

export default Header