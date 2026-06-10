import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"
import '../App.css'
import { FormContext } from "../pages/FormContext";


export default function Form() {
const navigate = useNavigate();
const {
    date, setDate,
    operator, setOperator,
    aircraft, setAircraft,
    location, setLocation,
    timeOfStrike, setTimeOfStrike,
    runWayUsed, setRunWayUsed,
    phaseOfFlight, setPhaseOfFlight,
    effectOnFlight, setEffectOfflight,
    skyCondition, setSkyCondition,
    precipitation, setPrecipitation,
    numberOfBirdsSeen, setNumberOfBirdsSeen,
    numberOfBirdsStruck, setNumberOfBirdsStruck,
    sizeOfBirds, setSizeOfBirds,
    confirmBirds, setConfirmBirds,
    unconfirmBirds, setUnconfirmBirds,
    handleSubmit,
    error,
    errorField,
    setErrorField,                                                 
  } = useContext(FormContext);

  // handle submit
   const submit = async (e) => {
    const success = await handleSubmit(e);
    if (success) {
      navigate("/viewData");
    }
  };


  return ( 
    <div className="max-w-2xl relative mx-auto mt-2 bg-white/20 backdrop-blur-md small-6 rounded-xl shadow-lg border border-white/30">
      <h2 className="text-xl header font-semibold text-gray-800 mb-6">
        Air Side Incident Details
      </h2>

      <form onSubmit={submit} className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="mb text-xsm font-medium text-gray-700">
          Date
          </label>
          {errorField === "date" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <input
            name="date"
            type="date"
            value={date}
            onChange={(e) => {setDate(e.target.value)
              if (errorField === "date") {
                setError("");
                setErrorField("");
              }
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-gray-500 "
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Flight Operator
          </label>
          {errorField === "operator" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <input
            name="flight_operator"
            type="text"
            value={operator}
            onChange={(e) => {setOperator(e.target.value)
              if (errorField === "operator") {
                setError("");
                setErrorField("");
              }
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-gray-500  "
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
         Aircraft Registration
          </label>
           {errorField === "aircraft" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <input
            name="aircraft"
            type="text"
            value={aircraft}
            onChange={(e) => {setAircraft(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-gray-500  "
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Incident Location
          </label>
           {errorField === "location" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="incident_location"
            value={location}
            onChange={(e) => {setLocation(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500  focus:ring-gray-500 "
          >
            <option >Select location</option>
            <option >Within The Airport</option>
            <option >Outside The Airport</option>
          </select>
        </div>

        {/* Time of Strike */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Time Of Strike
          </label>
           {errorField === "timeOfStrike" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="time_of_strike"
            value={timeOfStrike}
            onChange={(e) => {setTimeOfStrike(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 "
          >
            <option value="">Select time</option>
            <option value="Dawn">Dawn</option>
            <option value="Day">Day</option>
            <option value="Dusk">Dusk</option>
            <option value="Night">Night</option>
          </select>
        </div>

        {/* Runway Used */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Runway Used
          </label>
           {errorField === "runWayUsed" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="run_way_used"
            value={runWayUsed}
            onChange={(e) => {setRunWayUsed(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 "
          >
            <option value="">Select runway</option>
            <option>14</option>
            <option>32</option>
          </select>
        </div>

        {/* Phase of Flight */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Phase of Flight
          </label>
           {errorField === "phaseOfFlight" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="phase_of_flight"
            value={phaseOfFlight}
            onChange={(e) => {setPhaseOfFlight(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 "
          >
            <option value="">Select phase</option>
            {[
              "Park",
              "Taxi",
              "Take Off Run",
              "Climb",
              "En Route",
              "Descent",
              "Approach",
              "Landing",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
           Effect On Flight
          </label>
           {errorField === "effectOnFlight" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="effect_on_flight"
            value={effectOnFlight}
            onChange={(e) => {setEffectOfflight(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 "
          >
            <option value="">Select Effect on flight</option>
            <option>None</option>
            <option>Aborted Take Off</option>
            <option>Precautionary Landing</option>
            <option>Engine Shutdown</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
           Sky Condition
          </label>
           {errorField === "skyCondition" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="sky_condition"
            value={skyCondition}
            onChange={(e) => {setSkyCondition(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 "
          >
            <option value="">Select sky condition</option>
            <option>No Cloud</option>
            <option>Some Cloudy</option>
            <option>OverCast</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
           Precipitation
          </label>
           {errorField === "precipitation" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="precipitation"
            value={precipitation}
            onChange={(e) => {setPrecipitation(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 "
          >
            <option value="">Select Precipitation</option>
            <option>Fog</option>
            <option>Rain</option>
            <option>Snow</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Number Of Birds Seen
          </label>
           {errorField === "numberOfBirdsSeen" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <input
            min={0}
            name="number_of_birds_seen"
            type="number"
            value={numberOfBirdsSeen}
            onChange={(e) => {setNumberOfBirdsSeen(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500  focus:ring-gray-500 "
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Number Of Birds Struck
          </label>
           {errorField === "numberOfBirdsStruck" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <input
            min={0}
            name="number_of_birds_struck"
            type="number"
            value={numberOfBirdsStruck}
            onChange={(e) => {setNumberOfBirdsStruck(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-gray-500 "
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Sizes Of Birds
          </label>
           {errorField === "sizeOfBirds" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <select
            name="size_of_Birds"
            value={sizeOfBirds}
            onChange={(e) => {setSizeOfBirds(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 "
          >
            <option value="">Select Sizes of Bird</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Confirm Birds
          </label>
           {errorField === "confirmBirds" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <input
          min={0}
           max={1}
            name="confirm_Birds"
            type="number"
            value={confirmBirds}
            onChange={(e) => {setConfirmBirds(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500  focus:ring-gray-500 "
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Unconfirm Birds
          </label>
           {errorField === "unconfirm" && (
            <small className="text-red-500 text-sm">{error}</small>
          )}
          <input
           min={0}
           max={1}
            name="unconfirm_Birds"
            type="number"
            value={unconfirmBirds}
            onChange={(e) => {setUnconfirmBirds(e.target.value)}}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-gray-500 
            "
          />
        </div>
        {/* Submit Button */}
        <div className="lg:col-span-3 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gray-300 text-white py-2.5 border rounded-lg font-medium hover:bg-gray-500 transition duration-200"
          >
            Submit Data
          </button>
        </div>
      </form>
    </div>
  );
}
