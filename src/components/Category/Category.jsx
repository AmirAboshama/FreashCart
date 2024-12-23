import axios from 'axios'
import React, { useEffect, useState  } from 'react'
import { Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
// import React from 'react'
import img1 from "../../assets/error-page-not-found-vector.jpg"

export default function Category() {
let [Productsub, setProductSub] = useState(null)


  function callCategory(){
    return  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  
    }
    function callsubCategory(){
   axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`)
   .then((res)=>{
    setProductSub(res.data.data)

    console.log(res.data.data)})
    .catch((error)=>{
      console.log(error);
      
    })
  
    }
useEffect(() => {
  callsubCategory()

 
}, )


    let  {data,isLoding ,isError,error,isFetching}= useQuery({
  queryKey:["products"],
  queryFn:callCategory,
 /*  staleTime:2000,
retry:3,
 */
/*    refetchInterval:20000,
   gcTime:3000, */
   select :(data)=> data.data.data
 })
console.log(data);
if(isLoding){
   return <span class="loader"></span>
}
if(error){
  return  <div className='flex justify-center'> <img src={img1} alt="" /> </div>

}


  return (
    <div>
     
         {/* { {isLoding ? <span class="loader"></span> : */} 
         <div className=' categoery  grid lg:grid-cols-4   md:grid-cols-6 sm:grids-cols-2 gap-5'>
     {data?.map((product,index)=> <div   key={product._id} className='  hover:border-green-500 border rounded-md hover:scale-110 duration-1000 overflow-hidden group relative text-start p-8'>
     <Link  to={`/ProductDetails/${product._id}/${product}`}>
     <img  className='h-[200px] m-auto bg-cover' src={product.image} alt={product.name} />
    <footer  className='text-center  bg-white'> <h3  className='text-emerald-500 font-bold ' >{product.name}</h3>
    <h2>{product.name}</h2></footer>
     <div className=' flex justify-between items-center' >
     
     </div>
   
     </Link>
     
     </div>)}
     </div  > {/* } */}
         {/* { {isLoding ? <span class="loader"></span> : */} 
         <h2 className='w-[100%] text-center my-10 text-[40px]  text-green-500'>Electronics subcategories
         </h2>
         <div className=' subcategoery my-5 grid lg:grid-cols-4   md:grid-cols-6 sm:grids-cols-2 gap-5'>
         
     {Productsub?.map((product,index)=> <div   key={product._id} className='  hover:border-green-500 border rounded-md hover:scale-110 duration-1000 overflow-hidden group relative text-start p-8'>
     <Link  to={`/ProductDetails/${product._id}/${product}`}>
     <h6> {product.name} </h6>
     </Link>
     
     </div>)}
     </div> {/* } */}


    </div>
  )
}
