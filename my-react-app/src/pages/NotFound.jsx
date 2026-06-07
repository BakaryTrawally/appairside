import React from 'react'
import "../index.css"
import '../App.css'
import App from '../App'
import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <App>   
    <div>
      <h1>This is not found page</h1>
      <p>
        <li>
            <Link to="/" style={{color: "black"}}> Back to Home</Link>
        </li>
      </p>
    </div>
</App>
  )
}

export default NotFound
