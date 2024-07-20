import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from '../../pages/Home/Home'

export const Mainsection = () => {
  return (
    <>
    <div className='Navbar'> 
       
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
