import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function AllOrders() {
  let {produtsCart,getcart,totalPrice,numberOfCart}=useContext(CartContext)




  return (
    <div className=' my-10'>
      
      <div className='flex justify-around my-2 '>
  <h2 className='bg-slate-400 p-2 rounded-md border-spacing-3'>total price: ( {totalPrice} )</h2>
  <h2 className='bg-slate-400 p-2 rounded-md border-spacing-3'> numb of items: ( {numberOfCart} )</h2>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
      
        <th scope="col" className="px-6 py-3">
          Price
        </th>
   
      </tr>
    </thead>
    <tbody>
    {produtsCart?.map((product)=> <tr key={product.product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.product.title}        </td>
       
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.price}         </td>
     
      </tr>
)}
   
    </tbody>
  </table>
</div>


    </div>
  )
}
