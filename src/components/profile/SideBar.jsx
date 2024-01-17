import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useLocation ,useNavigate} from 'react-router-dom'
import { logOut } from '../../services/operations/Auth'
import { useDispatch } from 'react-redux'
const SideBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div className=''>

        <div className='flex flex-col gap-3'>
            <NavLink className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white self-stretch'  to="feed">
                <button>Feed</button>
            </NavLink>
            <NavLink className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white self-stretch' to="MySecrets">
                <button >MySecrets</button>
            </NavLink>
            <NavLink className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white self-stretch' to="uploadSecrets">
                <button >Upload Secret</button>
            </NavLink>
            <NavLink className='border-2 rounded-md px-3 hover:scale-95 duration-150 py-2 font-bold bg-green-600 text-white self-stretch' to="changePassword">
                <button >change password</button>
            </NavLink>

           
        </div>

    </div>
  )
}

export default SideBar