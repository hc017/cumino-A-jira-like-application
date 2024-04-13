import React from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom"
import Home from '../Pages/Home/Home'
import SignIn from '../Pages/SignIn/SignIn'
import DashboardMain from '../Pages/Dashboard/DashboardMain'
import AfterSignUpForm from '../Pages/Profile/AfterSignUpForm'





function AllRoutes() {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route> 
    <Route path='/signin' element={<SignIn/>}></Route> 
    <Route path='/dashboard' element={<DashboardMain/>}></Route> 
    <Route path='/siginupform' element={<AfterSignUpForm/>}></Route> 
    </Routes>
    </>
  )
}

export default AllRoutes