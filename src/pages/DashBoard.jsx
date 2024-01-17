import React from 'react'
import SideBar from '../components/profile/SideBar'
import { Outlet } from 'react-router-dom'
const DashBoard = () => {

  return (
    <div className="dashboard bg-green-200">

    <div className='flex flex-row h-[92vh] overflow-hidden justify-between w-screen '>
      <div className='lg:w-[15%] md:w-[20%] w-[20%]  bg-green-100 pl-4 pr-4 h-[93vh] border-r-2 pt-10 lg:flex md:flex hidden' >
        <SideBar/>
      </div>
      <div className='w-[80%] h-[100%] overflow-y-auto grow pt-2 pb-3'>
           <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default DashBoard