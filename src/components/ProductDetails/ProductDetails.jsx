import axios from 'axios'
import { Link} from 'react-router-dom'

import { useParams } from 'react-router-dom';
import React, { useEffect, useState  } from 'react';
import img1 from "../../assets/error-page-not-found-vector.jpg"

export default function ProductDetails() {
let {id,category}  = useParams()
const [ProductDetails, setProductDetails] = useState(null)
const [RelatedProduct, setRelatedProduct] = useState(null)
const [isLoding, setisLoding] = useState(false)
const [Eroor, setEroor] = useState(false)

console.log(id);

 function getSpcificProduct(id){
setisLoding(true)
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then((res)=>{console.log(res.data.data)
        setProductDetails(res.data.data)
        setisLoding(false)

    })
    .catch((error)=>{console.log(error);
        setisLoding(false)
        setEroor(true)

})
}
 

function getProducts(category){
    setisLoding(true)
  
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((res)=>{
  let result=res.data.data.filter((product)=>product.category.name==category);
  setRelatedProduct(result)
 
  
    })
    .catch((error)=>{
      console.log(error);
      setisLoding(false)
      setEroor(true)
  
  
    })
  
  }

 useEffect(() => {
  getSpcificProduct(id)
  getProducts(category)

}, [id,category]) 

if(Eroor){
    return  <div className='flex justify-center'> <img src={img1} alt="" /> </div>
  
  }
  return <>      
  {isLoding ?  <span class="loader"></span>: 
 <>
   <div className='grid grid-cols-[1fr_2fr] items-center gap-3  p-10 container W-[80%] m-auto  '>
        <div ><img src={ProductDetails?.imageCover} alt="" /></div>
        <div className=' text-start  p-4'  > 
        <h2 className='font-bold my-3'>{ProductDetails?.title}</h2>
        
 <p>{ProductDetails?.description}</p>
<p className='font-bold'>{ProductDetails?.category.name}</p>
 
 {ProductDetails?.priceAfterDiscount?<div> <span className='font-bold line-through text-red-600	'> {ProductDetails?.price} EGP </span>
   <span className='font-bold	'> {ProductDetails?.priceAfterDiscount} EGP </span> </div> : <span className='font-bold 	'> {ProductDetails?.price} EGP </span>
  
}
<span> <i className="fa-solid fa-star text-yellow-300 "></i>{ProductDetails?.ratingsAverage}</span>

<button className=' btn group-hover:translate-y-[0%]  translate-y-[200%] '>add to cart </button>

             </div>
    </div> 


    <div className='  grid lg:grid-cols-6   md:grid-cols-4 sm:grids-cols-2 gap-5'>
{RelatedProduct?.map((product,index)=> <div   key={product.id} className=' overflow-hidden group relative text-start p-8'>
<Link   to={`/ProductDetails/${product.id}/${product.category.name}`}>
<img src={product.imageCover} alt={product.title} />
<h3  className='text-emerald-500 font-bold ' >{product.category.name}</h3>
<h2>{product.title.split("",15).join("")}</h2>
<div className=' flex justify-between items-center' >

  {product.priceAfterDiscount? <div> <span className='font-bold line-through text-red-600	'> {product.price} EGP </span>
   <span className='font-bold	'> {product.priceAfterDiscount} EGP </span> </div> : <span className='font-bold 	'> {product.price} EGP </span>
  
}
<span> <i className="fa-solid fa-star text-yellow-300 "></i>{product.ratingsAverage}</span>

</div>
{product.priceAfterDiscount?<span className='absolute bg-red-700 top-0 p-2 rounded-b-md text-white  '>sale</span>
:null}
</Link>
<button className=' btn group-hover:translate-y-[0%]  translate-y-[200%] '>add to cart </button>

</div>)}
</div>
 
 </>


    
}
         
 
    </>
}
