import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


  const SwitchFormToggle=()=>{
    setIsSignInForm(!isSignInForm)
  }
  const SignInButtonClick =()=>{
      // CheckValidData()
      console.log(email.current.value)
      console.log(password.current.value)
      const Message = CheckValidData(email.current.value,password.current.value);
      setErrorMessage(Message)

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('user-object',user)
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/87222382?v=4"
          }).then(() => {
             navigate('/browse')
              const {uid,email, displayName ,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            }).catch((error) => {
              // An error occurred
              console.log('error',error)
              setErrorMessage(error.message)
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' - ' + errorMessage)

        })
    }
    else{
      //sign in form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('login->', user)
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' - ' + errorMessage)
        });

    }
      
  }
  return (
    <div>
      <Header/>
         <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg' alt='header-bg'/>
        </div>
        <form  onSubmit={(e)=> e.preventDefault()}className='bg-[#0000008c] p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 rounde-lg '>
        <h1 className='font-bold text-white text-3xl p-4'> {isSignInForm ?'Sign In': 'Sign Up' }</h1>
        {
          !isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-2 m-2 bg-gray-400 w-full h-12 border-white'/>
        }
          <input  ref={email} type='text' placeholder='Email Address' className='p-2 m-2 bg-gray-400 w-full h-12 border-white'/>
          <input ref={password} type='password' placeholder='Password' className='p-2 m-2  bg-gray-400 w-full h-12'/>
          <p className='text-red-600 font-bold text-lg p-2'>{errorMessage}</p>
          <button className='m-2 p-4 bg-red-700 block w-full text-white rounded-b-md cursor-pointer' onClick={SignInButtonClick}>{isSignInForm ?'Sign In': 'Sign Up' }</button>
          <p className='text-white my-10 cursor-pointer' onClick={SwitchFormToggle}>{isSignInForm ?'New to Netflix ? Sign Up Now': 'Already Registered ? Sign In' }</p>
        </form>
    </div>
  )
}

export default Login