import React, {useState, useContext } from 'react'
import "../index.css"
import '../App.css'
import '../App.css'
import { Mail, Lock } from "lucide-react";
import { useNavigate } from 'react-router-dom'
import api from "../birdstrikeApi/strikeData";
import { FormContext } from "../pages/FormContext";

const Login = () => {
const {
  index,
  images
 } = useContext(FormContext);

 const navigate = useNavigate();
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const date = new Date();
 const handleSubmit= (e) =>{
     e.preventDefault();
      api.post("/login", {email, password })
     .then(user => {
       if(user.data.status === "Success"){
        localStorage.setItem("user", JSON.stringify(user.data)); 
        navigate('/viewData')
       }
     })
  }

  return (  
    <div style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",        // ✅ fill entire screen
        backgroundRepeat: "no-repeat",  // ✅ stop repeating
        backgroundPosition: "center",
      }} className="login-container h-screen  flex items-center justify-center to-indigo-200 px-4">
      {/* Card */}
      <div className="relative  mx-auto mt-2 bg-white/20  backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
        
        {/* Header */}
        <div className="text-center  mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            alt="logo"
            className="w-16 border-black mx-auto mb-4"
          />
          <h1 className="text-3xl text-black font-bold">Welcome Back</h1>
          <p className="text-sm text-gray-700">Sign in to continue</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5"> 
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute  left-1 top-1/2 -translate-y-1/2 text-white/70" size={18} />
              <input
              type="email"
              placeholder="Nanko@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-1 top-1/2 -translate-y-1/2 text-white/70" size={18} />
              <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-300"
          />
            </div>
          </div>
          {/* Button */}
          <button
            type="submit"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-g text-white py-2.5 border rounded-lg font-medium hover:bg-gray-700 
           transition duration-200"
          >
            Sign in
          </button>
        </form>
        {/* Footer */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <a 
          href="/register" 
          className="text-red-300 hover:text-pink-400 font-medium">
            back Home
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login
