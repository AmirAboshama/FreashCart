import React, {useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { WishListContext } from '../../Context/WishListContext'

export default function WishList() {

  let {getWishList ,deleteItemWishList ,produtswishList}=useContext(WishListContext)

 useEffect(() => {
     getWishList()
   }, [])
   

  return (
    <div>
     <div className='header text-start w-[85%] m-auto bg-gray-200 p-2 rounded-md border-spacing-3  my-3 text-[30px]'>
  <h2 className='my-8' >WishList</h2>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table  className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  
   
     
    {produtswishList?.map((product)=> <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title} />
        </td>

        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.title}        </td>
     
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.price}         </td>
        <td className="px-6 py-4">
          <span onClick={()=>deleteItemWishList(product._id)} href="#" className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Remove</span>
        </td>
      </tr>
)}
   
  </table>
</div>
</div>

    </div>
  )
}
