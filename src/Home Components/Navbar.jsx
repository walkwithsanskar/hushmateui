import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [nav,setNav]=useState(true);

    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-3 sm:h-16'>
        <h1 className='w-full text-3xl  text-cyan-300 font-thin'>HushMate</h1>    
        <ul className='hidden md:flex '>
                <li className='font-sm p-2'>Home</li>
                <li className='font-sm p-2'>Login</li>
                <li className='font-sm p-2'>Signup</li>
                <li className='font-sm p-2'>FAQs</li>

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu  size={20}/>}
        
        </div>
        <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500':'fixed left-[-100%]'}>
            <ul className=' uppercase p-4 pt-28'>
                <li className='font-sm p-2 border-gray-600 border-b'>Home</li>
                <li className='font-sm p-2 border-gray-600 border-b'>Login</li>
                <li className='font-sm p-2 border-gray-600 border-b'>Signup</li>
                <li className='font-sm p-2 '>FAQs</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar