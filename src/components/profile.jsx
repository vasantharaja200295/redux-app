import React from 'react'
import { useSelector } from 'react-redux'
import Logout from './logout';

function Profile() {

    const user = useSelector((state)=> state.user.value);

  return (
    <div>
        <h1>Profile Page</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>

        <h3>{user.string}</h3>
        <Logout/>
    </div>
  )
}

export default Profile