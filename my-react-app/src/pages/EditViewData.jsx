import React, {useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import api from "../birdstrikeApi/strikeData"



function EditViewData({strike}) {
const [show, setShow] = useState(false);
const [ fetchError, setFetchError ] = useState(null);
const [isLoading, setIsLoading ] = useState(true) 
const id = strike._id;
// Edit States
  const [editDate, setEditDate] = useState('');
  const [editOperator, setEditOperator] = useState('');
  const [editAircraft, setEditAircraft] = useState('');
  const [editLocation, setEditLocation] = useState('');
  const [editTimeOfStrike, setEditTimeOfStrike] = useState('');
  const [editRunWayUsed, setEditRunWayUsed] = useState('');
  const [editPhaseOfFlight, setEditPhaseOfFlight] = useState('');
  const [editEffectOnFlight, setEditEffectOfflight] = useState('');
  const [editSkyCondition, setEditSkyCondition] = useState('');
  const [editPrecipitation, setEditPrecipitation] = useState('');
  const [editNumberOfBirdsSeen, setEditNumberOfBirdsSeen] = useState('');
  const [editNumberOfBirdsStruck, setEditNumberOfBirdsStruck] = useState('');
  const [editSizeOfBirds, setEditSizeOfBirds] = useState('');
  const [editConfirmBirds, setEditConfirmBirds] = useState('');
  const [editUnconfirmBirds, setEditUnconfirmBirds] = useState('');


useEffect(() => {
 const fetchItems = async () => {
  try{
  setEditDate(
    strike.date
      ? new Date(strike.date).toISOString().split("T")[0]
      : ""
  );
  setEditOperator(strike.flight_operator);
  setEditAircraft(strike.aircraft);
  setEditLocation(strike.incident_location);
  setEditTimeOfStrike(strike.time_of_strike);
  setEditRunWayUsed(strike.run_way_used);
  setEditPhaseOfFlight(strike.phase_of_flight);
  setEditEffectOfflight(strike.effect_on_flight);
  setEditSkyCondition(strike.sky_condition);
  setEditPrecipitation(strike.precipitation);
  setEditNumberOfBirdsSeen(strike.number_of_birds_seen);
  setEditNumberOfBirdsStruck(strike.number_of_birds_struck);
  setEditSizeOfBirds(strike.size_of_Birds);
  setEditConfirmBirds(strike.confirm_Birds);
  setEditUnconfirmBirds(strike.unconfirm_Birds);
} catch(err){
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchItems()
}, []);


// update func
const handleUpdate = async (e) => {
      e.preventDefault()
      const formValues = {
       date:editDate,
       flight_operator: editOperator,
       aircraft:editAircraft,
       incident_location: editLocation,
       time_of_strike: editTimeOfStrike,
       run_way_used: editRunWayUsed,
       phase_of_flight:editPhaseOfFlight,
       effect_on_flight:editEffectOnFlight,
       sky_condition:editSkyCondition,
       precipitation:editPrecipitation,
       number_of_birds_seen:editNumberOfBirdsSeen,
       number_of_birds_struck:editNumberOfBirdsStruck,
       size_of_Birds:editSizeOfBirds,
       confirm_Birds:editConfirmBirds,
       unconfirm_Birds:editUnconfirmBirds
      };
      try{
        const response = await api.put(`/post/${id}`, formValues);
        setShow(false); // close the modal
      }catch(err){
        console.log(`Error: ${err.message}`);
      }
}


  return (
    <>
      <button className=' btn border p w-[80px] mb-2 rounded-lg text-center' variant="primary" onClick={() => setShow(true)}>
        Edit
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Update Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleUpdate} id="editModal" className="max-w-2xl w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Incident Location */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Date
          </label>
          <input
            required
            name="editDate"
            type="date"
            value={
              editDate
            }
            onChange={(e) => {
            setEditDate(
              new Date(response.data.date).toISOString().split("T")[0]
            )
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Flight Operator
          </label>
          <input
            required
            // name="operator"
            type="text"
            value={editOperator}
           onChange={(e) => {
                setEditOperator(e.target.value)
            }}
            // onChange={handleChange}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
         Aircraft
          </label>
          <input
            required
            name="aircraft"
            type="text"
            value={editAircraft}
            onChange={(e) => {
                setEditAircraft(e.target.value)   
            }}
            // onChange={handleChange}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Incident Location
          </label>
          <input
            required
            name="flight_operator"
            type="text"
            value={editLocation}
          onChange={(e) => {
                setEditLocation(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Time of Strike */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Time of Strike
          </label>
          <input
            required
            name="flight_operator"
            type="text"
            value={editTimeOfStrike}
            onChange={(e) => {
                setEditTimeOfStrike(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Runway Used */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Runway Used
          </label>
          <input
            required
            name="flight_operator"
            type="text"
            value={editRunWayUsed}
            onChange={(e) => {
                setEditRunWayUsed(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Phase of Flight */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Phase of Flight
          </label>
         <input
            required
            name="flight_operator"
            type="text"
            value={editPhaseOfFlight}
            onChange={(e) => {
                setEditPhaseOfFlight(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
           Effect On Flight
          </label>
          <input
            required
            name="flight_operator"
            type="text"
            value={editEffectOnFlight}
            onChange={(e) => {
                setEditEffectOfflight(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
           Sky Condition
          </label>
          <input
            required
            name="flight_operator"
            type="text"
            value={editSkyCondition}
           onChange={(e) => {
                setEditSkyCondition(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
           Precipitation
          </label>
          <input
            required
            name="flight_operator"
            type="text"
            value={editPrecipitation}
            onChange={(e) => {
                setEditPrecipitation(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 whitespace-nowrap">
          Number Of Birds Seen
          </label>
          <input
            required
            min={0}
            name="number_of_birds"
            type="number"
            value={editNumberOfBirdsSeen}
            onChange={(e) => {
                setEditNumberOfBirdsSeen(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 whitespace-nowrap">
          Number Of Birds Struck
          </label>
          <input
            required
            min={0}
            name="number_of_birds"
            type="number"
            value={editNumberOfBirdsStruck}
           onChange={(e) => {
                setEditNumberOfBirdsStruck(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Sizes Of Birds
          </label>
          <input
            required
            name="flight_operator"
            type="text"
            value={editSizeOfBirds}
            onChange={(e) => {
                setEditSizeOfBirds(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Confirm Birds
          </label>
          <input
            required
            min={0}
            name="confirm_birds"
            type="number"
            value={editConfirmBirds}
           onChange={(e) => {
                setEditConfirmBirds(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
          Unconfirm Birds
          </label>
          <input
           required
           min={0}
            name="unconfirm_birds"
            type="number"
            value={editUnconfirmBirds}
           onChange={(e) => {
                setEditUnconfirmBirds(e.target.value)   
            }}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            "
          />
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-3 md:col-span-2">
          <button
            htmlFor="editModal"
            type="submit"
            className="w-full bg-gray-300 text-white py-2.5 border rounded-lg font-medium hover:bg-gray-500 transition duration-200"
          >
            Update Data
          </button>
        </div>
      </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default  EditViewData;