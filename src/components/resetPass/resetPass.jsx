import  {useFormik } from 'formik'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import  { Link, NavLink, useNavigate } from 'react-router-dom'
import * as yup from "yup"
import {userContext} from '../../Context/UserContext'

export default function ResetPass() {


  let{setToken}=useContext(userContext)

let[errorApi,seterrorApi]=useState(null)
let[isloding,setLoding]=useState(false)

let navigate=useNavigate()
  async function handleResetPass (email){
    setLoding(true)
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{email})  
  .then((res)=>{
console.log(res);

navigate("/VertifyCode")
setLoding(false)

  })
  .catch((error)=>{
    console.log(error.response.data);
seterrorApi(error.response.data.message)
setLoding(false)

  })
 
}



  let validationSchema=yup.object().shape({

    email:yup.string().email("email should include @").required("this is item Requaired"),
  })




let formikregister=useFormik({
  initialValues:{
    email:"",
   
   
  },

  validationSchema,
  onSubmit:handleResetPass,
})

  return (
    <div className='text-green-500 my-10'>

{errorApi? <div className=' w-[75%] mb-[50px] m-auto bg-red-300 text-black p-3 rounded-lg' role='alert'>{errorApi} </div> :null }


           <h2 className='max-w-xl mx-auto text-start text-black text-[30px] ' >reset your account password
           </h2>

     <form  onSubmit={formikregister.handleSubmit}  className="max-w-xl mx-auto">

 
  <div className="relative z-0 w-full mb-5 group">
      <input 
            onBlur={formikregister.handleBlur}

      onChange={formikregister.handleChange}
       value={formikregister.values.email}
      
      type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
      <label htmlFor="email" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email</label>
      {formikregister.errors.email&&formikregister.touched.email? <div className='  bg-red-300 text-black p-3 rounded-lg' role='alert'> {formikregister.errors.email}</div> :null }

  </div>



<div className=' flex justify-between'> 
  
   <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
</div>
  </form>
    </div>
  )
}