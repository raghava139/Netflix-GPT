import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider }from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:'/browse',
      element : <Browser/>
    }
  ])

  useEffect(()=>{
    console.log('on-auth-changed');

    onAuthStateChanged(auth, (user) => {
      console.log('inside-on-auth')
      if (user) {
        const {uid,email, displayName ,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
      } else {
          dispatch(removeUser())
      }
});

  },[])
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body