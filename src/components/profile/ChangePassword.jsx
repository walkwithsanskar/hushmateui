import React from 'react'
import { changepass } from '../../services/operations/Auth'
import { useDispatch,useSelector } from 'react-redux'
import {useState} from 'react'
import toast from "react-hot-toast"
const ChangePassword = () => {

  const dispatch = useDispatch();
  const {token,userData} = useSelector((state)=>state.auth);
  const [formData,setFormData]=useState({
    email:userData?.email,password:"",newPassword:""
  })
  const changeHandler=(event)=>{
    const {name,value} = event.target;
    setFormData((prev)=>{
      return {...prev,[name]:value};
    })
  }
  const submitHandler=()=>{
    if(formData.password===""||formData.newPassword===""){
      return toast.error("fill in all the details first");
    }
    dispatch(changepass(formData,token));
  }
  return (
    <div className='flex flex-row  h-[92vh]  min-h-[92vh] '>
        
      <div className='flex flex-col items-center justify-center h-[100%] w-screen pt-5 back2 '>

      <fieldset className='border-2 rounded-lg px-4 py-3 lg:w-[30vw]
        md:w-[40vw] w-[80vw] 
       hover:shadow-2xl  duration-200 hover:border-4  bg-gray-50 bg-opacity-90'>
        <div className='flex flex-col items-center self-stretch w-[100%]'>
          
           <div className='text-2xl border-b-2 pb-3 self-stretch text-center '>Change Password</div>
           <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col gap-4  px-4 py-4  duration-200 self-stretch'>

<div className='flex flex-col self-stretch '>
                   <label htmlFor="email" className={`transform ${formData.password != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Old Password</label>
                   <input  id='email' name="password" value={formData.password} onChange={changeHandler} required className='py-1  text-black bg-transparent border-b-2  outline-none  self-stretch' />
</div>



<div className='flex flex-col self-stretch '>
                   <label htmlFor="password" className={`transform ${formData.newPassword != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>New Password</label>
                   <input type="text" id='password' name="newPassword" value={formData.newPassword} onChange={changeHandler} required className='py-1  text-black  border-b-2 bg-transparent  outline-none ' />
</div>

<button className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white ' onClick={()=>{submitHandler()}} >Change Password</button>

</form>
          

          

        </div>
        
      </fieldset>
     
      </div>
      
    </div>
  )
}

export default ChangePassword