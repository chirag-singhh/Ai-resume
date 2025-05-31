import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header';



function App() {
  const {user,isLoaded,isSignedIn}=useUser();
if(!isSignedIn&&isLoaded){
  return <Navigate to={"/auth/signin"}/>
}
//outlet children routes ko use krne ke liyee
  return (
   <>
   <Header/>
    <Outlet/>  
   </>
  )
}

export default App
