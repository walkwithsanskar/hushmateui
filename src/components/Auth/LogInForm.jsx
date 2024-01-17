import React, { useState } from 'react'
import { logIn } from '../../services/operations/Auth'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaEye ,FaEyeSlash} from "react-icons/fa";
const LogInForm = () => {
    
     const [hide,setHide] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

   const [formData,setFormData] = useState({
    email:"",password:""
   })

   const changeHandler=(event)=>{
        const {name,value}=event.target;
        setFormData((prev)=>{
            return {...prev,[name]:value};
        })
   }

   const loginHandler=()=>{

        if(formData.email.trim()==="" || formData.password.trim()==="") {return toast.error("Fill in all details first")}
     


        dispatch(logIn(formData,navigate));

   }

  return (
    <div className='self-stretch'>

     

     <div>
     <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col gap-4  px-4 py-4  duration-200'>

<div className='flex flex-col '>
                   <label htmlFor="email" className={`transform ${formData.email != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Email</label>
                   <input type="email" id='email' name="email" value={formData.email} onChange={changeHandler} required className='py-1  text-black bg-transparent border-b-2  outline-none ' />
</div>



<div className='flex flex-col  relative'>
                   <label htmlFor="password" className={`transform ${formData.password != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Password</label>
                 
                   <input type={`${hide ? 'password' : 'text'}`} id='password' name="password" value={formData.password} onChange={changeHandler} required className='py-1  text-black  border-b-2 bg-transparent  outline-none ' />
                   <span className='absolute right-2 top-8 text-lg' onClick={()=>{
                    setHide(!hide);
                   }}>{hide?<FaEyeSlash/>:<FaEye/>}</span>

                 
                   
</div>

<button className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white ' onClick={()=>{loginHandler()}} >Log In</button>

</form>
     </div>
         
    </div>
  )
}

export default LogInForm