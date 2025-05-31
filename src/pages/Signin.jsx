import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function SigninPage() {
  return (
    <div className='flex justify-center items-center my-20'>
    <SignIn></SignIn>
    </div>
  )
}

export default SigninPage