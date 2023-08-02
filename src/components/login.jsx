import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user'
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const LoginDispatch = useDispatch(); 

  const handleDispatch= (username, age, email, status) =>{
      LoginDispatch(login({name:username, age:age, email:email,string:status}))
      
    }

  return (
    <div className='container'>

      <input onChange={(e)=>{e.preventDefault();setUsername(e.target.value)}}  placeholder='Username'/>
      <input onChange={(e)=>{e.preventDefault(); setAge(e.target.value)}} placeholder='Age' type='number'/>
      <input onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}  placeholder='Email'/>      

      <button onClick={()=>{
        if(username==="vasantharaja"){
          handleDispatch(username, age, email, "Login Sucessfull");
          navigate("/profile");
        }else{
          handleDispatch("", 0, "", "login not sucessfull");
        }
        
      }}>Login</button>
    </div>
  )
}

export default Login