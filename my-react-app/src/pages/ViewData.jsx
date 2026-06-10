import React, {useContext, useEffect, useState } from 'react'
import "../index.css"
import '../App.css'
import api from "../birdstrikeApi/strikeData"
import EditViewData from './EditViewData'
import { FormContext } from "../pages/FormContext";
import { useNavigate } from 'react-router-dom'


const ViewData = () => {
 
  //prop drilled
  const {
    formData,
    setFormData,
    handleDelet
    } = useContext(FormContext);

  

 return (
  <div className=" overflow-auto rounded- border border-gray-200 shadow-lg">
  {formData.length ? ( 
  <table className="  text-center  text-sm border-sep relative border-spacing-0">
    <thead className="bg-gray-100  text-gray-700 uppercase text-l">
            <tr>
              {[
                "S/N",
                "Date",
                "Flight Operator",
                "Aircraft Type",
                "Incident Location",
                "Time of Strike",
                "Runway Used",
                "Phase Of Flight",
                "Effect On Flight",
                "Sky Condition",
                "Precipitation",
                "Birds Seen",
                "Birds Struck",
                "Bird Size",
                "Confirmed",
                "Unconfirmed",
                "Actions",
              ].map((head) => (
                <th key={head}
                className="  sticky top-0 z-10 bg-gray-100 px-4 py-3 t whitespace-nowrap"
                
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {formData.map((strike, index) => (
              <tr
                key={index}
                className="  hover:bg-gray-50  border border-b border-gray-700 divide-x divide-gray-200  even:bg-gray-50/50"
              >
                <td className="px-1 py-1 border border-gray-300 whitespace-nowrap">{index + 1}</td>
                <td className="px-1 py-1 border border-gray-300 whitespace-nowrap">{new Date(strike.date).toLocaleDateString()}</td>
                <td className="px-1 py-1 border border-gray-300" >{strike.flight_operator}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.aircraft}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.incident_location}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.time_of_strike}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.run_way_used}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.phase_of_flight}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.effect_on_flight}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.sky_condition}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.precipitation}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.number_of_birds_seen}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.number_of_birds_struck}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.size_of_Birds}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.confirm_Birds}</td>
                <td className="px-1 py-1 border border-gray-300">{strike.unconfirm_Birds}</td>
                <td className="px-1 py-1 border border-gray-300">
                <EditViewData
                strike={strike}
                />
                <button className="btn text-danger border border-md w-[80px]  rounded-full ..."
                 onClick = {() => handleDelet(strike._id)}
                >Delete</button>
                </td>
              </tr>
              
            ))}
            {/* <BirdStrikeChart month={3} year={2026} /> */}
          </tbody>
        </table>
    ) : (
        <p style={{ marginTop:'2rem', textAlign: "center", display: "grid", placeItems: "center",
        color: "black",fontSize: "3rem", margin:"auto", height: "50vh" }}>Your List is empty </p>
    )}
      </div>
   );
};


export default ViewData
