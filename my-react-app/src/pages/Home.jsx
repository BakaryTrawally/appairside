import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../pages/FormContext";


export default function LandingPage() {
 const {
  index,
  images
 } = useContext(FormContext);



  return (
    <div className="w-full homeBackgroud"
    style={{
        backgroundImage: `url(${images[index]})`,
      }}
    >
      {/* HERO SECTION */}
      <section className="bg-gradient-to-l   to-blue-500 text-white rounded- p-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Banjul Int'l Airport Bird Strike Management System
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          Efficiently track, manage, and analyze bird strike incidents with
          real-time data visualization and reporting tools.
        </p>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="border !no-underline border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black text-white transition login-text"
            
          >
            Go to Login 
          </Link>
        </div>
      </section>

    </div>
  );
}