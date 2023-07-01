import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Notfound from './components/Notfound/Notfound'
import Register from './components/Register/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home2 from './components/Home2/Home2'
import jwtDecode from 'jwt-decode'
import Top from './components/Top/Top'
import Popular from './components/Popular/Popular'
import MovieDetalies from './components/MovieDetalies/MovieDetalies'
import Protected from './components/Protected/Protected'



export default function App() {
  let [user,setUser]=useState(null)
  function getUser(){
    let token= localStorage.getItem('token')
    let usr=jwtDecode(token)
    setUser(usr)
  }
  useEffect(()=>{
    if(localStorage.getItem('token'))
    {getUser()}
  },[])
  const routes = createBrowserRouter([
    {
      path:'',element:<Layout user={user} setUser={setUser} />,children:[
        {index:true,element:<Home2/>},
        {path:'top',element:<Protected><Top/></Protected>},
        {path:'movie/:id',element:<Protected><MovieDetalies/></Protected> },
        {path:'home',element:<Home2/>},
        {path:'popular',element:<Protected><Popular/></Protected>},
        {path:'login',element:<Login getUser={getUser} />},
        {path:'register',element:<Register/>},
        {path:"*",element:<Notfound/>}
        
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
