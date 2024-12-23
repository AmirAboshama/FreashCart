import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../../Context/UserContext'
export default function Navbar() {
let navigate=useNavigate()
let{setToken,token}=useContext(userContext)
function logout(){
  localStorage.removeItem("token")
  setToken(null)
  navigate("/login")
}
  return (
    <div>
     
     

<nav className="bg-gray-600 text-white  z-[5000] fixed start-0 end-0 top-0 border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl p-4">
       <div className='flex justify-center items-center gap-4'>
       <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../../public/freshcart-logo.svg" className="h-8" alt="Flowbite Logo" />
        </NavLink>
    
       </div>
       {token?   <ul className='flex gap-3   text-green-500' >
          <li> <NavLink to="" >Home </NavLink>  </li>
          <li> <NavLink to="Products" >Products </NavLink>  </li>
          <li> <NavLink to="Brands" >Brands </NavLink>  </li>
          <li> <NavLink to="Category" >Category </NavLink>  </li>
          <li> <NavLink to="WishList" >WishList </NavLink>  </li>
          <li> <NavLink to="AllOrders" >AllOrders </NavLink>  </li>
          <li> <NavLink to="Cart" >Cart </NavLink>  </li>
        </ul>:null}

        <div className='flex justify-center items-center  gap-5'>
<ul className='flex gap-3'>
  <li><i class="fa-brands fa-facebook"></i></li>
  <li><i class="fa-brands fa-twitter"></i></li>
  <li><i class="fa-brands fa-github"></i></li>
  <li><i class="fa-solid fa-globe"></i></li>
</ul>
<div className="flex items-center space-x-6 rtl:space-x-reverse ">

  {token?            <span to="#"  onClick={logout} className="text-sm  cursor-pointer text-green-400 dark:text-green-400 hover:underline">Logout</span>
: <div >     <NavLink to="Login" className="text-sm  m-4 text-green-400 dark:text-green-400 hover:underline">Login</NavLink>
            <NavLink to="Register" className="text-sm  text-green-400 dark:text-green-400 hover:underline">Register</NavLink></div>}
            
        </div>
        </div>
    </div>
</nav>


     
    </div>
  )
}
