import axios from 'axios'
import React, { useEffect, useState  } from 'react'
import { Link, NavLink} from 'react-router-dom'
import img1 from "../../assets/error-page-not-found-vector.jpg"
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { WishListContext } from '../../Context/WishListContext'

export default  function Products() {
let [Color, setColor] = useState(false)

 async function click(Color,x){
 Color ? setColor(false) :setColor(true)
}


let {addToWishList}=useContext(WishListContext)
 
 async function addproductWishList (id){
 let flag =  await addToWishList(id)
 console.log(flag);
 if (flag){
  toast.success("product add sucesfuly")
 }else{
  toast.error("product faild when add")

 }
 
}
let {addTocart}=useContext(CartContext)
 
 async function addproductcart (id){
 let flag =  await addTocart(id)
 console.log(flag);
 if (flag){
  toast.success("product add sucesfuly")
 }else{
  toast.error("product faild when add")

 }
 
}

   async function callProduct(){
  return await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

  }


let  {data,isLoding ,isError,error,isFetching}= useQuery({
  queryKey:["products"],
  queryFn:callProduct,
 /*  staleTime:2000,
retry:3,
 */
/*    refetchInterval:20000,
   gcTime:3000,  */
   select :(data)=> data?.data.data
 })
console.log(data);
if(isLoding){
   return <div  className='bg-slate-300 w-[100%] h-[100hv]'><span class="loader"></span></div>
}
if(error){
  return  <div className='flex justify-center'> <img src={img1} alt="" /> </div>

}
/* const [Products, setProducts] = useState([])
const [isLoding, setisLoding] = useState(false)
const [Eroor, setEroor] = useState(false)
function getProducts(){
  setisLoding(true)

  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  .then((res)=>{
console.log(res.data.data);
setProducts(res.data.data)
setisLoding(false)

  })
  .catch((error)=>{
    console.log(error);
    setisLoding(false)
    setEroor(true)


  })

}

useEffect(() => {
 
  getProducts()
}, [])

if(Eroor){
  return  <div className='flex justify-center'> <img src={img1} alt="" /> </div>

}
 */

  return <div>

{isLoding? <div className='bg-slate-400 w-full h-full ' ><span class="loader"></span></div> :<div className='  grid lg:grid-cols-6   md:grid-cols-4 sm:grids-cols-2 gap-5'>
{data?.map((product,index)=> <div   key={product._id} className='  hover:border-green-500 border rounded-md hover:scale-105 duration-1000 overflow-hidden group relative text-start p-8'>
<Link  to={`/ProductDetails/${product._id}/${product.category.name}`}>
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
<button  onClick={()=>addproductWishList(product.id)}  className={Color ?"text-red-500" :null}><i class=" fa-solid fa-heart"></i></button>

<button onClick={()=>addproductcart(product.id)} className=' btn group-hover:translate-y-[0%]  translate-y-[300%] '>add to cart </button>

</div>)}

</div> } 
  

</div>
}
