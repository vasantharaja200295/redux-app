import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/user'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const LogoutDispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
        LogoutDispatch(logout())
        navigate('/');
    }

  return (
    <div>
        
        <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Logout