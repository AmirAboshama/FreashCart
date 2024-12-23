import React, { createContext, useEffect } from 'react'
import { useState } from 'react'


   export let userContext=createContext()
export default function UserContext({children}) {
  const [token,setToken]=useState(localStorage.getItem("token"))

/* useEffect(()=>{

  if(localStorage.getItem("token")){
    setToken(localStorage.getItem("token"))
  }
},[])
 */

  return (
    <userContext.Provider value={{token,setToken }}>
      {children}
    </userContext.Provider>
  )
}
