import React, {useState } from 'react'
import "../index.css";
import { useNavigate } from 'react-router-dom'
import api from "../birdstrikeApi/strikeData";

const Register = () => {
const navigate = useNavigate();
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


 const submit= (e) =>{
    e.preventDefault();
     api.post("/register", { name, email, password })
    .then(user => {
    // Save user to localStorage
      console.log(user.data)
      localStorage.setItem("user", JSON.stringify(user.data));
    })
    .catch(error => console.log(error))
    navigate('/')
 }

  return (
    <div className='d-flex vh-98  mt-3 justify-content-center align-items-center'>
    <div className=' bg-whi w-[1500px] text-black rounded p-3'>  
    <form onSubmit={submit}>
        <h2>Register User</h2>
        <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                placeholder='Enter name'
                className="form-control w-[1000px] text-capitalize bg-transparent border-bottom border-white shadow-none text-white"
            // className='form-control text-capitalize '  
            onChange={(e) => setName(e.target.value)}  
            />
        </div>
        <div className='mb-2'>
            <label htmlFor="email">User Name/Email</label>
            <input 
                type="text"
                placeholder='Enter email'
                className="form-control bg-transparent border-bottom border-white shadow-none text-white"
            onChange={(e) => setEmail(e.target.value)}    
            />
        </div>
        <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                placeholder='Enter password'
                className="form-control text-capitalize bg-transparent border-bottom border-white shadow-none text-white"
            onChange={(e) => setPassword(e.target.value)}    
            />
        </div>
        <button type='submit' className='btn btn-secondary registerBtn w-100'>Submit</button>
    </form>   
    </div>
    </div>
  )
}

export default Register
