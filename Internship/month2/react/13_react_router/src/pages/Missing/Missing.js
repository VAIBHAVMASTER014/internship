import React from 'react'
import {Link} from 'react-router-dom';
const Missing = () => {
  return (
    <div>
      Something went wrong with path.
      <Link to ='/'> Go back to home</Link>
    </div>
  )
}

export default Missing