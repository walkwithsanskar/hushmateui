import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import  {useNavigate,Link,NavLink} from "react-router-dom";
import { logOut } from '../../services/operations/Auth';
import ProfileDropDown from './ProfileDropDown';
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {

  const {token} = useSelector((state)=>state.auth);
  const {userData} = useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  return (
    <div className='w-screen flex flex-row lg:justify-around md:justify-around justify-between py-1 items-baseline border-b-2 shadow-md  bg-white gap-6 relative'>
        
        {
          token &&<div className='  text-2xl lg:hidden md:hidden flex self-center relative'>
          <GiHamburgerMenu  onClick={()=>{
            setShow(!show);
          }}/>
            <div className={` top-10   absolute origin-left flex flex-col z-[10] lg:w-auto md:w-auto w-screen pr-2 h-screen items-center  bg-white  ${show?"scale-x-1":"scale-x-0"}
         duration-500 pt-4`}>
        
        <div className='flex flex-col gap-3 items-center w-[100%]'>
              <h1>Welcome!! {userData?.fName}</h1>
            <NavLink onClick={()=>{
                  setShow(false);
                  
              }} className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white self-stretch' to="/dashboard/feed">
                <button className='text-base '>Feed</button>
            </NavLink>
            <NavLink onClick={()=>{
                  setShow(false);
                  
              }}  className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white self-stretch' to="/dashboard/MySecrets">
                <button className='text-base '>MySecrets</button>
            </NavLink>
            <NavLink onClick={()=>{
                  setShow(false);
                  
              }} className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white self-stretch'  to="/dashboard/uploadSecrets">
                <button className='text-base '>Upload Secret</button>
            </NavLink>
            <NavLink onClick={()=>{
                  setShow(false);
                  
              }}  className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 flex text-white self-stretch' to="/dashboard/changePassword">
                <button className='text-base  '>change password</button>
            </NavLink>

            <Link onClick={()=>{
                  setShow(false);
                  dispatch(logOut(navigate))
              }} className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-red-600 text-white self-stretch' >

              <button className='text-base' >LogOut</button>
              </Link>

        </div>

        
        
        </div>
          </div> 
        }

        <div className='self-center'>
          <Link to={`${token?"/dashboard/feed":"/"}`}> <h1 className='text-2xl font-bold'>Hush Mate</h1> </Link>
        </div>
        <div>
          <div className='flex flex-row gap-4'>
            {
              token===null &&
              <Link to="/login">
              <button className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold '>Log In</button>
              </Link> 
            
            }
            {
              token===null && 
              <Link to="/signup">
              <button className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 bg-green-600 text-white font-bold'>Sign Up</button>
              </Link>
            }
            {

              token && <ProfileDropDown/>
            }
            {
              token && <Link to="/">
              <button className='lg:flex md:flex hidden border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 bg-red-600 text-white font-bold' onClick={
                ()=>{
                    dispatch(logOut(navigate));
                }
              }> Log Out </button>
              </Link>
            }

          </div>
        </div>

        
    </div>
  )
}

export default NavBar