import React from 'react'
import { Outlet } from 'react-router-dom'

// imported files
import Navbar from '../Navbar/Nav'
import Scrollup from '../../util/Scrollup'

const RootLayout = () => {
  return (
    <>
    <Scrollup/>

    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RootLayout