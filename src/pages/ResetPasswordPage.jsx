import React, { useEffect, useState } from 'react'
import { resetPass } from '../services/operations/Auth'
import {useLocation,useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'
import {useDispatch} from "react-redux"
const ResetPasswordPage = () => {

  const location = useLocation();
  const [token,setToken] = useState(location.pathname.split("/")[2]);
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
      console.log(token);
      console.log(location.pathname.split("/")[1]);
  },[])

  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center  overflow-hidden back3 lg:px-0 md:px-0 px-3'>

        <div className='flex flex-col gap-2 bg-gray-300 py-10 px-5 rounded-md bg-opacity-60 lg:w-[50vw] md:w-[55vw] w-[90vw]'> 
          <h1 className='text-xl '>Reset Your Password</h1>
          <div className='flex flex-col '>
                   <label htmlFor="email" className={`transform ${password != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-600"} transition-transform duration-150 text-base `}>New Password</label>
                   <input type="email" id='email' name="password" value={password} onChange={(event)=>{
                    setPassword(event.target.value)
                   }} required className='py-1  text-black bg-transparent border-b-green-600  outline-none  border-b-2' />
        </div>
        <div className='flex flex-col '>
                   <label htmlFor="pass" className={`transform ${confirmPassword != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-600"} transition-transform duration-150 text-base `}>Confirm New Password</label>
                   <input type="email" id='pass' name="email" value={confirmPassword} onChange={(event)=>{
                    setConfirmPassword(event.target.value)
                   }} required className='py-1  text-black bg-transparent border-b-green-600  outline-none  border-b-2' />
        </div>
        
              <button className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 self-stretch bg-green-600 text-white font-bold' 
              onClick={()=>{
                if(password!==confirmPassword) return toast.error("passwords donot match");
                dispatch(resetPass({password,confirmPassword},navigate,token));
              }}>
                Reset Password
              </button>
              
        </div>


      
    </div>
  )
}

export default ResetPasswordPage