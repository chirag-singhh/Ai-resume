import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import SigninPage from './pages/Signin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import {ClerkProvider} from '@clerk/clerk-react'


const router = createBrowserRouter([
  {
  element:<App></App>, //childer iske liye banaye hai 
  // taki outlet ke through ek jagah se sb routes chale
  children:[
  
     {
    path:"/dashboard",
    element:<Dashboard/>
    },
     
]
},
  {
    path:"/",
    element:<Home/>
    },
 {
  path:"/auth/signin",
  element:<SigninPage/>
},

])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
   <RouterProvider router={router}/>
   </ClerkProvider>
   
  </StrictMode>,
)
