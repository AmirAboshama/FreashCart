import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home '
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import Brands from './components/Brands/Brands'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Notfound from './components/Notfound/Notfound'
import UserContext from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/productDetails/productDetails'
import {QueryClient  ,QueryClientProvider} from"@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import Payment from './components/payment/payment'
import AllOrders from './components/allOrders/allOrders'
import Category from './components/Category/Category'
import WishListContextProvider from './Context/WishListContext'
import WishList from './components/WishList/WishList'
import ResetPass from './components/resetPass/resetPass'
import VertifyCode from './components/vertifyCode/vertifyCode'


let client= new QueryClient()
QueryClientProvider
const router= createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element: <ProtectedRoute><Home/></ProtectedRoute> },
    {path:"Cart",element: <ProtectedRoute><Cart/></ProtectedRoute> },
    {path:"Products",element:<ProtectedRoute><Products/></ProtectedRoute> },
    {path:"Brands",element: <ProtectedRoute><Brands/></ProtectedRoute>},
    {path:"Category",element: <ProtectedRoute><Category/></ProtectedRoute>},
    {path:"payment",element: <ProtectedRoute><Payment/></ProtectedRoute>},
    {path:"WishList",element: <ProtectedRoute><WishList/></ProtectedRoute>},
    {path:"/ResetPass",element: <ResetPass/>},
    {path:"/VertifyCode",element: <VertifyCode/>},
    {path:"allorders",element: <ProtectedRoute><AllOrders/></ProtectedRoute>},
    {path:"ProductDetails/:id/:category",element: <ProtectedRoute> <ProductDetails /> </ProtectedRoute>},
    {path:"Login",element:<Login/>},
    {path:"Register",element:<Register/>},
    {path:"*",element:<Notfound/>},
  ]}
])
function App() {

  return(
  <UserContext>
<CartContextProvider >
<WishListContextProvider >
<QueryClientProvider   client={client}>
<RouterProvider  router={router} ></RouterProvider>
<Toaster />

<ReactQueryDevtools/>
</QueryClientProvider>
</WishListContextProvider>
</CartContextProvider >




 </UserContext>
 
  )
  
}

export default App
