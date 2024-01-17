import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { logOut } from '../../services/operations/Auth';
const ProfileDropDown = () => {

    const {userData } = useSelector((state)=>state.auth);
 
    const [show,setShow]=useState(false);
    const dispatch = useDispatch();
  return (
    <div className='relative flex flex-col justify-center group '>
        <img src={userData?.profilePic} className='w-[40px] rounded-[50%] aspect-square'/>
        <div className='absolute top-12 left-[-100px] hidden duration-200  group-hover:flex  bg-gray-300  gap-3   flex-col z-[10] h-fit w-max rounded-lg shadow-xl px-4 py-4'>
            
            <button  className='px-2 py-2  text-white bg-green-600 hover:scale-95 duration-200'>Welcome {userData?.fName}</button>
            <button className='px-2 py-2 text-white bg-red-600 hover:scale-95 duration-200' onClick={()=>{
                dispatch(logOut());
            }}>LogOut</button>
        
                

        </div>
    </div>
  )
}

export default ProfileDropDown