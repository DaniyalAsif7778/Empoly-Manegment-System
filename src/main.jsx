import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import './index.css'
import './App.css'
 import Layout from './Layout'
 import {   Home, Login  } from './imports.js'
 import Singup from './componenets/Auth/Singup/Singup.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
 const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={ <Home/>} />
      <Route path='/Singup' element={<Singup/>} />
      <Route path='/Login' element={<Login/>}/>
      
      </Route>
  )
 )
createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <RouterProvider router={router}/>
 
  </StrictMode>,
)
