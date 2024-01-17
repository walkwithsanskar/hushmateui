import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { sendOtp } from '../../services/operations/Auth';
import toast from 'react-hot-toast';
import { signUp } from '../../services/operations/Auth';
import { useNavigate } from 'react-router-dom';
import { FaEye ,FaEyeSlash} from "react-icons/fa";

const SignUpForm = () => {
  
  const [hide,setHide] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    fName:"",lName:"",uniqueUserName:"",email:"",password:"",profilePic:null,otp:""
  });

  const [showOtp,setShowOtp] = useState(false);

  const changeHandler=(event)=>{
        const {name,type,value} = event.target;

        if(type=="file"){
            setFormData((prev)=>{
                return {...prev,[name]:event.target.files[0]};
            })
        }else{
            setFormData((prev)=>{
                return {...prev,[name]:value};
            })
        }

        // console.log(formData);
  }
  
  const sendOtpHandler =()=>{

    if(formData.email.trim()==="" || formData.fName.trim()==="" || formData.lName.trim()==="" || formData.password.trim()==="" ||
    formData.uniqueUserName.trim()==="") return toast.error("fill in all details first")
    dispatch(sendOtp(formData.email,setShowOtp));
  }
  
  const verifyOtpHandler=()=>{
    if(formData.otp.trim()=="") return toast.error("please fill otp");

    const newFormData = new FormData();

    for(const key in formData){
        newFormData.append(key,formData[key]);
    }
    
    dispatch(signUp(newFormData,navigate));
    

  }

  return (
    <div className='flex flex-col justify-center items-center w-[80%] min-h-[100%] max-h-fit'>

    <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col gap-4 border-2 rounded-md lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%] px-4 py-4 hover:shadow-2xl duration-200  bg-gray-100 bg-opacity-60'>

    <div className='flex flex-col '>
                            <label htmlFor="fname" className={`transform ${formData.fName != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>First Name</label>
                            <input type="text" id='fname' name="fName" value={formData.fName} onChange={changeHandler} required className='py-1  text-black appearance-none border-b-2 bg-transparent outline-none '  autoComplete="off" />
    </div>



    <div className='flex flex-col '>
                            <label htmlFor="lName" className={`transform ${formData.lName != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Last Name</label>
                            <input type="text" id='lName' name="lName" value={formData.lName} onChange={changeHandler} required className='py-1  text-black  border-b-2  bg-transparent outline-none autoComplete="off"' />
    </div>

    <div className='flex flex-col '>
                            <label htmlFor="uniqueUserName" className={`transform ${formData.uniqueUserName != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Anonymous Name</label>
                            <input type="text" id='uniqueUserName' name="uniqueUserName" value={formData.uniqueUserName} onChange={changeHandler} required className='py-1  text-black  border-b-2   bg-transparent outline-none autoComplete="off"' />
    </div>

    <div className='flex flex-col '>
                            <label htmlFor="email" className={`transform ${formData.email != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Email</label>
                            <input type="text" id='email' name="email" value={formData.email} onChange={changeHandler} required className='py-1  text-black  border-b-2 bg-transparent outline-none autoComplete="off"' />
    </div>


    <div className='flex flex-col   relative'>
                            <label htmlFor="password" className={`transform ${formData.password != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Password</label>
                            <input  type={`${hide ? 'password' : 'text'}`} id='password' name="password" value={formData.password} onChange={changeHandler} required className='py-1 text-black border-b-2 outline-none  bg-transparent' autoComplete="off"/>
                            <span className='absolute right-2 top-8 text-lg' onClick={()=>{
                    setHide(!hide);
                   }}>{hide?<FaEyeSlash/>:<FaEye/>}</span>
    </div>

    <div>
       

    <div>

    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Upload file</label>

    <input className=" py-2  px-3 block w-full text-md  border border-gray-300 hover:scale-95 duration-200 rounded-lg cursor-pointer text-white focus:outline-none bg-green-600 placeholder:text-white " accept="image/png, image/jpg, image/gif, image/jpeg" name="profilePic" onChange={changeHandler}  id="file_input" type="file"/>

    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
    </div>

    

    </div>

   {showOtp&&<div className='flex flex-col'>
     <label htmlFor="otp" className={`transform ${formData.otp != "" ? "translate-y-0 text-blue-500" : "translate-y-6 text-gray-400"} transition-transform duration-150 text-base `}>Enter Otp</label>
                            <input type="text" id='otp' name="otp" value={formData.otp} onChange={changeHandler} required className='py-1  text-black  border-b-2  outline-none ' />
   
    </div>}

    { !showOtp && <button className='border-2  w-[100%] rounded-md px-3 hover:scale-95 duration-150 py-2 bg-green-600 text-white font-bold ' onClick={sendOtpHandler}  >Send Otp</button>}

    { showOtp && <button className='border-2  w-[100%] rounded-md px-3 hover:scale-95 duration-150 py-2 bg-green-600 text-white font-bold ' onClick={verifyOtpHandler}  >Verify Otp</button>}


    {
        showOtp && <button className='border-2  w-[100%] rounded-md px-3 hover:scale-95 duration-150 py-2 bg-green-600 text-white font-bold ' onClick={sendOtpHandler} >Resend Otp</button>
    }


    </form>




    </div>
  )
}

export default SignUpForm