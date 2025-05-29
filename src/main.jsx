import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import Signin from './pages/Signin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
  element:<App></App>, //childer iske liye banaye hai 
  // taki outlet ke through ek jagah se sb routes chale
  children:[
    {
    path:"/",
    element:<Home/>
    },
     {
    path:"/dashboard",
    element:<Dashboard/>
    },
     
]
},
 {
  path:"/auth/signin",
  element:<Signin/>
},

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
