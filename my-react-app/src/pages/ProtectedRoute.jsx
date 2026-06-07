import React from "react";
import { Navigate} from 'react-router-dom';
import "../index.css"
import '../App.css'


export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user"); // Or from a context

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
