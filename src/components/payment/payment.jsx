import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  // let {produtsCart,getcart,totalPrice,numberOfCart}=useContext(CartContext)
  let navigate =useNavigate()
  const [cash, setCash] = useState(false)
 let {cartID}= useContext(CartContext)
  let token =localStorage.getItem("token")
  function handleCashPayment(opiobj){

 axios
.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartID}`,{
  opiobj,
},{
  headers:{
    token,
  },
}).then((res)=>{
  console.log(res.data);
  
  navigate('/allOrders')
  
}).catch((error)=>{
console.log(error);

})





}



 function handleOnlinePayment(opiobj){



    axios
  .post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}`,{
    opiobj,
  },{
    headers:{
      token,
    },
      params:{
url:"http://localhost:5173"
      }
    
  }).then((res)=>{
    console.log(res.data);
window.open(res.data.session.url,"_self")    
  }).catch((error)=>{
  console.log(error);
  
  })
  
  

}
function handlePayment(values){

  let opiobj ={
    shippingAddress:values,
  };
if(cash){
  handleCashPayment(opiobj)

}else{
  handleOnlinePayment(opiobj)

}
}

 let formikpayment= useFormik({
    initialValues:{
      details: "",
      phone: "",
      city: ""
    },
    onSubmit:handlePayment
  })


  return (

    
    <div  className='my-8'>

 <form  onSubmit={formikpayment .handleSubmit}  className="max-w-xl mx-auto">

 
<div className="relative z-0 w-full mb-5 group">
    <input 
          onBlur={formikpayment .handleBlur}

    onChange={formikpayment .handleChange}
     value={formikpayment .values.details}
    
    type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
    <label htmlFor="details" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your details</label>

</div>
<div className="relative z-0 w-full mb-5 group">
    <input 
          onBlur={formikpayment .handleBlur}

    onChange={formikpayment .handleChange}
     value={formikpayment .values.phone}
    
    type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
    <label htmlFor="phone" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone</label>

</div>
<div className="relative z-0 w-full mb-5 group">
    <input 
          onBlur={formikpayment .handleBlur}

    onChange={formikpayment .handleChange}
     value={formikpayment .values.city}
    
    type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
    <label htmlFor="city" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your city</label>

</div>


<button onClick={()=>{ setCash(true)}} type="submit" class= " mx-3   text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">cash payment </button>
<button onClick={()=>{ setCash(false)}} type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">online payment</button>

</form>
    </div>
  )
}
