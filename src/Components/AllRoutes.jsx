import React from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom"
import Home from '../Pages/Home/Home'
import SignIn from '../Pages/SignIn/SignIn'


function AllRoutes() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route> 
    <Route path='/signin' element={<SignIn/>}></Route> 
    </Routes>
  )
}

export default AllRoutes