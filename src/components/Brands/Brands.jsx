import axios from 'axios'
import React, { useEffect, useState  } from 'react'
import { Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import img1 from "../../assets/error-page-not-found-vector.jpg"
import { Button, Modal } from "flowbite-react";

export default function Brands() {
  const [openModal, setOpenModal] = useState(true);

  function callBrands(){
    return  axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  
    }


    let  {data,isLoding ,isError,error,isFetching}= useQuery({
  queryKey:["products"],
  queryFn:callBrands,
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
    <div >
     <h1 className='text-green-500 my-10 text-2xl text-[100px]' >All Brands
     </h1>


      {isLoding?<div className=' bg-slate-400 '><span class="loader"></span></div>  :
     <div className='   grid lg:grid-cols-4   md:grid-cols-6 sm:grids-cols-2 gap-5'>
     {data?.map((product,index)=> <div   key={product._id} className='  hover:border-green-500 border rounded-md overflow-hidden group relative text-start p-8'>
    
{/*      <Button onClick={() => setOpenModal(true)}>  <img className='h-[200px] m-auto bg-cover' src={product.image} alt={product.name} />
    <div  className='text-center'> <h3  className='text-emerald-500 font-bold ' >{product.name}</h3>
    </div>
   </Button>


   <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="space-y-6">
      
          <img className='h-[200px] m-auto bg-cover' src={product.image} alt={product.name} />


          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
 */}




     <Link  >
     <img className='h-[200px] m-auto bg-cover' src={product.image} alt={product.name} />
    <div  className='text-center'> <h3  className='text-emerald-500 font-bold ' >{product.name}</h3>
    </div>
   
   
     </Link>   
     
     </div>)}
     </div> } 


    </div>
  )
}
