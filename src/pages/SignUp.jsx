import React, { useState } from 'react'
import SignUpForm from '../components/Auth/SignUpForm';
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import toast from 'react-hot-toast';
const SignUp = () => {

  const [clicked, setClicked] = useState(false);

  return (
    <div className='pt-2 pb-6 signup '>

      <div className='w-screen h-[100%] flex flex-row'>

        <div className='flex flex-col  items-center gap-4 w-[100%] h-[100%] '>

          <div className='flex flex-row gap-3 justify-center w-[100%] pt-3'>

            {
              clicked && <button className='self-start border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold ' onClick={() => {
                setClicked(false);
              }}>Back</button>
            }
            <h1 className='self-start font-bold pt-2 text-2xl '>Sign up To Hush Mate</h1>

          </div>
          {

            !clicked && <div className='flex flex-col gap-6'>
              <button className='px-10 py-5 flex flex-row justify-around rounded-2xl bg-black text-white gap-2 hover:scale-95 duration-200 ' onClick={()=>toast.success("Coming Soon")}><span><FcGoogle className='text-2xl' /></span>Sign In With Google</button>
              <div className="flex flex-row self-stretch items-center justify-center gap-1">
                <div className='w-[40%] h-[1px] bg-gray-600'></div>
                <span className='text-gray-600'> or </span>
                <div className='w-[40%] h-[1px] bg-gray-600'></div>
              </div>
              <button className='px-10 py-5 flex flex-row justify-around rounded-2xl bg-black text-white gap-2  hover:scale-95 duration-200' onClick={() => {
                setClicked(true);
              }}><span className='self-center'><MdAlternateEmail className='text-2xl' /></span>continue with email</button>
            </div>
          }

          {
            clicked && <SignUpForm />
          }

        </div>


      </div>
    </div>
  )
}

export default SignUp