import axios from 'axios'
import React, { Children, createContext, useContext, useState } from 'react'



 export let WishListContext =createContext()
export default function WishListContextProvider({children}) {
    const [produtswishList, setprodutswishList] = useState(null)
    const [WishListID, setWishListID] = useState(null)

    let token =localStorage.getItem("token")
    async function   addToWishList(productId){
   return  axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId},{ headers:{  token }
        }).then((res)=>{
            console.log(res.data.data);
            return "sucssssss"
            
        }).catch((error)=>{
            console.log(error)
            return "errooooooooooooor"

        })
    
 }
function getWishList(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:{
token
    }
})
.then((res)=>{
    console.log(res.data);

    setWishListID(res.data.data._id)
    // setnumberOfWishList(res.data.data)
    setprodutswishList(res.data.data)
    // settotalPrice(res.data.data.data) 

})
.catch((error)=>{
    console.log(error);
    
})
}



 function deleteItemWishList (id){
    axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
       headers:{
        token
       }
    }).then((res)=>{
        console.log(res.data.data);
     setWishListID(res.data.data._id)
     setprodutswishList(res.data.data)
 

    }).catch((error)=>{
        console.log(error);
        
    })
}



  return <WishListContext.Provider  value={{addToWishList,getWishList ,deleteItemWishList ,WishListID,produtswishList}} >
      {children}
    </WishListContext.Provider>
  
}
