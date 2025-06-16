import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const SwitchFormToggle=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
         <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg' alt='header-bg'/>
        </div>
        <form className='bg-[#0000008c] p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 rounde-lg '>
        <h1 className='font-bold text-white text-3xl p-4'> {isSignInForm ?'Sign In': 'Sign Up' }</h1>
        {
          !isSignInForm && <input type='text' placeholder='Full Name' className='p-2 m-2 bg-gray-400 w-full h-12 border-white'/>
        }
          <input type='text' placeholder='Email Address' className='p-2 m-2 bg-gray-400 w-full h-12 border-white'/>
          <input type='password' placeholder='Password' className='p-2 m-2  bg-gray-400 w-full h-12'/>
          <button className='m-2 p-4 bg-red-700 block w-full text-white rounded-b-md'>{isSignInForm ?'Sign In': 'Sign Up' }</button>
          <p className='text-white py-10 cursor-pointer' onClick={SwitchFormToggle}>{isSignInForm ?'New to Netflix ? Sign Up Now': 'Already Registered ? Sign In' }</p>
        </form>
    </div>
  )
}

export default Login