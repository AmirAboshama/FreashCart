import axios from 'axios'
import React, { Children, createContext, useContext, useState } from 'react'



 export let CartContext =createContext()
export default function CartContextProvider({children}) {
    const [numberOfCart, setnumberOfCart] = useState(0)
    const [totalPrice, settotalPrice] = useState(0)
    const [produtsCart, setprodutsCart] = useState(null)
    const [price, setPrice] = useState(0)
    const [cartID, setcartID] = useState(null)

    let token =localStorage.getItem("token")
    async function   addTocart(productId){
   return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
        { productId},{ headers:{  token }
        }).then((res)=>{
            console.log(res);
            return "sucssssss"
            
        }).catch((error)=>{
            console.log(error)
            return "errooooooooooooor"

        })
    
 }
function getcart(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{
token
    }
})
.then((res)=>{
    console.log(res.data.data);
    
     setcartID(res.data.cartId)

    setnumberOfCart(res.data.numOfCartItems )
    setprodutsCart(res.data.data.products)
    settotalPrice(res.data.data.totalCartPrice)
})
.catch((error)=>{
    console.log(error);
    
})
}

  async function updateCartQuantity(id,count){
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    count
 },{
    headers:{
        token
    }
 }).then((res)=>{
    console.log(res.data);
    // setPrice(res.data.data.products[0].price )

    setnumberOfCart(res.data.numOfCartItems )
    setprodutsCart(res.data.data.products)
    settotalPrice(res.data.data.totalCartPrice)
    return true
    
 }).catch((error)=>{
    console.log(error);
    return false

 })
}

 function deleteItem (id){
    axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
       headers:{
        token
       }
    }).then((res)=>{
        console.log(res.data);
        setnumberOfCart(res.data.numOfCartItems )
        setprodutsCart(res.data.data.products)
        settotalPrice(res.data.data.totalCartPrice)
        
    }).catch((error)=>{
        console.log(error);
        
    })
}



  return <CartContext.Provider  value={{addTocart,getcart ,updateCartQuantity,deleteItem ,cartID,numberOfCart,totalPrice,produtsCart}} >
      {children}
    </CartContext.Provider>
  
}
