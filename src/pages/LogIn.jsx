//react imports
import React from 'react'
import { Link } from 'react-router-dom'

// importing components
import LogInForm from '../components/Auth/LogInForm'

const LogIn = () => {

  return (
    <div className='flex flex-row  h-[92vh]  min-h-[92vh] back'>
        {/* <div className='h-screen w-[50%]'>
          <img src={login} className='object-cover w-[100%] h-[100%]'/>
     
     </div> */}
      <div className='flex flex-col items-center justify-center h-[100%] w-screen pt-5 back '>

      <fieldset className='border-2 rounded-lg px-4 py-3 lg:w-[40vw] md:w-[40vw] sm:w-[90vw] w-[90vw] bg-gray-100 bg-opacity-50 hover:shadow-2xl  duration-200 hover:border-4'>
        <div className='flex flex-col items-center w-[100%]'>
          
           <div className='text-2xl border-b-2 pb-3 self-stretch text-center'>Log In To Hush Mate</div>

          <LogInForm/>

          <div className="flex flex-row self-stretch items-center justify-center gap-1">
          <div className='w-[40%] h-[1px] bg-green-600'></div>
          <span className='text-green-600'> or </span>
          <div className='w-[40%] h-[1px] bg-green-600'></div>
          </div>

          <div>
           <Link to="/resetpassword">
                    Forgot Password?
           </Link> 
          </div>

        </div>
        
      </fieldset>
     
      </div>
      
    </div>
  )
}

export default LogIn