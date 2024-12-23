import React, { useEffect, useState } from 'react'
import logo1 from "../../assets/images.png"
import logo2 from "../../assets/PayPal-Logo.png"
import logo3 from "../../assets/png-transparent-visa-payment-card-debit-card-mastercard-visa-blue-text-service.png"
import logo4 from "../../assets/logo-Apple-Store-Disponible-sur.png"
import logo5 from "../../assets/google-play-badge-logo-png-transparent.png"
export default function Footer() {
  return (
    



    <footer className=' bottom-0 start-0 end-0 bg-gray-300 text-gray-500  p-10 w-[100%] '>
<div className=' text-start FooterContents container w-[950%] m-auto'>
<h4 className='pb-2'>Get The FreshCart App</h4>
<p className='pb-2'>we will send you a link open it in your phone to download the app </p>
<div className='pb-2'>
  
<form class="flex items-center w-[95%] m-auto ">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
           
        </button>
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-400 rounded-lg border border-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-400 dark:hover:green-600 dark:focus:ring-green-800">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
</form>

</div>
</div>
<div className="frnshise flex justify-between w-[85%] border-gray-400 p-3  m-auto ">
  <div className="left flex justify-center items-center gap-3">
    <h4>Payment Parteners</h4>
 <img src={logo1} className='w-[40px]' alt="" />
 <img src={logo2} className='w-[40px]' alt="" />
 <img src={logo3} className='w-[40px]' alt="" />
  </div>
  <div className="right flex justify-center items-center   gap-3">

  <h4> get deliver with fresgcart</h4>
 <img src={logo4} className='w-[70px]' alt="" />
 <img src={logo5} className='w-[70px]' alt="" />
 
  </div>
</div>
    </footer>

   
  )
}
