import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/user'

function Logout() {
    const LogoutDispatch = useDispatch();
    const handleLogout = () =>{
        LogoutDispatch(logout())
    }

  return (
    <div>
        
        <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Logout