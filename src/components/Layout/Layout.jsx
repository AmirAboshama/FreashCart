import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
<div className='m-auto text-center'>

<Navbar/>

<div className=' m-auto pt-[130px] w-[90%]'>
 <Outlet/>
</div>
<Footer/>


</div>
  )
}
