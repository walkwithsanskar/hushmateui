import React,{useState} from 'react'
import toast from 'react-hot-toast';
import { sendToken } from '../services/operations/Auth';
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
const ResetPassword = () => {

  const dispatch = useDispatch();
  const [email,setEmail] = useState("");

  return (
    <div className='w-[100%] h-[100vh]  flex flex-col justify-center items-center bg-blue-100 overflow-hidden back3 lg:px-0 md:px-0 px-3'>

        <div className='flex flex-col gap-2 bg-gray-200 py-10 px-5 rounded-md bg-opacity-60'> 
          <h1 className='text-xl text-center '>Please Enter Your Registered Mail Id</h1>
          <div className='flex flex-col '>
                   <label htmlFor="email" className={`transform ${email != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Email</label>
                   <input type="email" id='email' name="email" value={email} onChange={(event)=>{
                    setEmail(event.target.value)
                   }} required className='py-1  text-black bg-transparent border-b-green-600  outline-none  border-b-2' />
        </div>
        
              <button className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 self-stretch bg-green-600 text-white font-bold' 
              onClick={()=>{
                if(email==="") return toast.error("fill email first");
                dispatch(sendToken(email));
              }}>
                Reset Password
              </button>
              
        </div>


      
    </div>
  )
}

export default ResetPassword