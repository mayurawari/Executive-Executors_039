import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Nav } from '../Navbar/Nav'
import "../../styles/Mainsection/Mainsection.css"
import Footer from '../../pages/Footer/Footer'

export const Mainsection = () => {
  return (
    <>
    <div className='adjuster'>

      <Nav/>
      <Footer/>

    </div>
    </>
  )
}
