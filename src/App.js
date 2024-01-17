import React from 'react'
import {Routes , Route } from "react-router-dom"

// import componnents
import NavBar from './components/common/NavBar'
import Feed from "./components/profile/Feed"
import MySecrets from "./components/profile/MySecrets"
import UploadSecret from "./components/profile/UploadSecret"
import ChangePassword from "./components/profile/ChangePassword"
import OpenRoute from "./components/Auth/OpenRoute"
import PrivateRoute from "./components/Auth/PrivateRoute"

//import pages
import Home from "./pages/Home"
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ResetPassword from "./pages/ResetPassword"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import DashBoard from "./pages/DashBoard"


const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
    <div>

    <NavBar/>
    </div>
    <div className=''>

    <Routes>

      <Route path='/' element={<OpenRoute>
        <Home/>
      </OpenRoute>}/>

      <Route path="/login" element={<OpenRoute>
        <LogIn/>
      </OpenRoute>}/>

      <Route path="/signup" element={<OpenRoute>
        <SignUp/>
      </OpenRoute>}/>

      <Route path="/resetpassword" element={<OpenRoute>
        <ResetPassword/>
      </OpenRoute>}/>
      
      <Route path="/resetpassword/:id" element={<OpenRoute>
        <ResetPasswordPage/>
      </OpenRoute>}/>
      
      <Route path='/dashboard' element={<PrivateRoute>
        <DashBoard/>
      </PrivateRoute>}>

          <Route path="/dashboard/feed" element={<Feed/>}/>
          <Route path="/dashboard/mysecrets" element={<MySecrets/>}/>
          <Route path="/dashboard/uploadsecrets" element={<UploadSecret/>}/>
          <Route path="/dashboard/changepassword" element={<ChangePassword/>}/>
        
      </Route>
    </Routes>
      
    </div>


    </div>
  )
}

export default App