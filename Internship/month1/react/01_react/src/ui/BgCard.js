import React from 'react'
import './BgCard.css'
const BgCard = (props) => {
    const classes = 'card-bg ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default BgCard