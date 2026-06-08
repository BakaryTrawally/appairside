  // Create root and render
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css'
import "./App.css"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound'
import ProtectedRoute from './pages/ProtectedRoute'
import Login from './pages/Login';
import AddData from './pages/AddData';
import ViewData from './pages/ViewData';
import Form from './pages/Form';
import EditViewData from './pages/EditViewData';
import DataChat from './pages/DataChat';
import { FormProvider } from "./pages/FormContext";
import BirdsStrikeReport from './pages/BirdStrikeReport';
import Register from './pages/Register';
import Home from './pages/Home'


const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
  { path: "/login",  element: <Login />},
   { path: "/register",  element:<Register/>},
  // 🔒 Protected Routes
  {
    element: (
    <ProtectedRoute>
      <App />
    </ProtectedRoute>
  ),
    children: [
      { path: "/dataChart",  element:<DataChat/>},
      // { path: "/register",  element:<Register/>},
      { path: "/addData", element: <AddData /> },
      { path: "/viewData", element: <ViewData/> },
      { path: "/form", element: <Form/> },
      { path: "/editData/:id", element: <EditViewData/>},
      { path: "/report", element: <BirdsStrikeReport/>},
    ]
  },
  { path: "/*", element: <NotFound /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>    
        <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>,
)

