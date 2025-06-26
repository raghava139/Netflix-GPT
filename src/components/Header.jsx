import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const handlesignout=()=>{
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        console.log(error)
        // An error happened.
        navigate('/error')
      });
  }
  return (
    <div className='absolute px-8 py-5 bg-gradient-to-b w-[100%] from-black z-10 flex justify-between'>
      <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='header-logo'/>
     
     { user && <div className='flex justify-center align-bottom gap-4'>
        <div>
          <img  className='w-6 h-6'src={user?.photoURL} alt ='user-icon'/></div>
        <div><button onClick={handlesignout} className='text-white font-bold'> Sign Out</button></div>
      </div>
    }
    </div>
  )
}

export default Header