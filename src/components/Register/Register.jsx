import  {useFormik } from 'formik'
import style from "./Register.module.css"
import axios from 'axios'
import React, { useContext , useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import {userContext} from '../../Context/UserContext'
export default function Register() {

let{setToken}=useContext(userContext)

let[errorApi,seterrorApi]=useState(null)
let[isloding,setLoding]=useState(false)

let navigate=useNavigate()
  async function handleRgister (values){
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)  
  .then((res)=>{
console.log(res.data.token);
setToken(res.data.token)
localStorage.setItem("token" ,res.data.token)
navigate("/")

  })
  .catch((error)=>{
    // console.log(error.response.data.message);
seterrorApi(error.response.data.message)
  })
 
}



  let validationSchema=yup.object().shape({

    name:yup.string().min(3,"min char is 3 ").max(15,"max char is 15").required("this is item Requaired"),
    email:yup.string().email("email should include @").required("this is item Requaired"),
    phone:yup.string().matches(/^01[1250][0-9]{8}$/,"phone should imclude 11 number start 01").required("this is item Requaired"),
    password:yup.string().matches(/^[\w]{6,8}$/,"pass should include letter from 6 to 8 char").required("this is item Requaired"),
    rePassword:yup.string().oneOf([yup.ref("password")],"repass not match").required("this is item Requaired"),
  })




let formikregister=useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:"",
  },

  validationSchema,
  onSubmit:handleRgister,
})

  return (
    <div className='text-green-500'>

{errorApi? <div className=' w-[75%] mb-[50px] m-auto bg-red-300 text-black p-3 rounded-lg' role='alert'>{errorApi} </div> :null }


           <h2 className='max-w-xl mx-auto' >Register Now</h2>

           <div className='text-green-500'>




     <form  onSubmit={formikregister.handleSubmit}  className="max-w-xl mx-auto">

 
  <div className="relative z-0 w-full mb-5 group">
      <input 
            onBlur={formikregister.handleBlur}

      onChange={formikregister.handleChange}
       value={formikregister.values.name}
      
      type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
      <label htmlFor="name" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
      {formikregister.errors.name&&formikregister.touched.name? <div className='  bg-red-300 text-black p-3 rounded-lg' role='alert'> {formikregister.errors.name}</div> :null }

  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
            onBlur={formikregister.handleBlur}

      onChange={formikregister.handleChange}
       value={formikregister.values.email}
      
      type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
      <label htmlFor="email" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email</label>
      {formikregister.errors.email&&formikregister.touched.email? <div className='  bg-red-300 text-black p-3 rounded-lg' role='alert'> {formikregister.errors.email}</div> :null }

  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input 
            onBlur={formikregister.handleBlur}

      onChange={formikregister.handleChange}
       value={formikregister.values.password}
      
      type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
      <label htmlFor="password" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your password</label>
      {formikregister.errors.password&&formikregister.touched.password? <div className='  bg-red-300 text-black p-3 rounded-lg' role='alert'> {formikregister.errors.password}</div> :null }

  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
            onBlur={formikregister.handleBlur}

      onChange={formikregister.handleChange}
       value={formikregister.values.rePassword}
      
      type="Password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
      <label htmlFor="rePassword" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your rePassword</label>
      {formikregister.errors.rePassword&&formikregister.touched.rePassword? <div className='  bg-red-300 text-black p-3 rounded-lg' role='alert'> {formikregister.errors.rePassword}</div> :null }

  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
            onBlur={formikregister.handleBlur}

      onChange={formikregister.handleChange}
       value={formikregister.values.phone}
      
      type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="  "/>
      <label htmlFor="phone" className="peer-focus:font-medium  start-0 absolute text-sm text-green-500 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone</label>
      {formikregister.errors.phone&&formikregister.touched.phone? <div className='  bg-red-300 text-black p-3 rounded-lg' role='alert'> {formikregister.errors.phone}</div> :null }

  </div>

  <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>

  </form>
    </div>


    </div>
  )
}