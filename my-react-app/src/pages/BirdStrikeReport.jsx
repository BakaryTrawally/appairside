import React, {useContext, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useParams, useNavigate } from 'react-router-dom'
import { FormContext } from "../pages/FormContext";
import api from "../birdstrikeApi/strikeData"


function EditViewData() {
    const [show, setShow] = useState(false);
    const { 
        selectedMonth,
        selectedYear,
        runwayStats,
        chartRef,
        handlePrint,
        reportType
        } = useContext(FormContext);

return (
<>
    <button className='bg-gray-300 tbn flex-end text-white px-4 py-2 rounded hover:bg-gray-400  py-2 rounded-lg text-center' variant="primary" onClick={() => setShow(true)}>
        View more birds strike details
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Birds Strike Details Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="flex gap-4 mb-2 text-sm font-medium">
           {reportType === "monthly"
              ? `Month: ${selectedMonth}/${selectedYear}`
             : `Year: ${selectedYear}`}
        </div>
{/* <div ref={chartRef} className="print-area">
    <table className="table-auto border border-gray-400 w-full text-sm text-center mx-auto">
    <thead className="bg-gray-100">
        <tr>
        <th className="border border-gray-400 px-4 py-2">Run Way</th>
        <th className="border border-gray-400 px-4 py-2">R/W 14</th>
        <th className="border border-gray-400 px-4 py-2">R/W 32</th>
        <th className="border border-gray-400 px-4 py-2">Total Incidents</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td className="border text-center border-gray-400 px-4 py-2 font-medium">
            Confirm
        </td>
        <td className="border border-gray-400 px-4 py-2">{runwayStats["14"].confirmed}</td>
        <td className="border border-gray-400 px-4 py-2">{runwayStats["32"].confirmed}</td>
        <td className="border border-gray-400 px-4 py-2">{runwayStats["32"].confirmed + runwayStats["14"].confirmed}</td>
        </tr>

        <tr>
        <td className="border border-gray-400 px-4 py-2 font-medium">
            Unconfirm
        </td>
        <td className="border border-gray-400 px-4 py-2">{runwayStats["14"].unconfirmed}</td>
        <td className="border border-gray-400 px-4 py-2">{runwayStats["32"].unconfirmed}</td>
        <td className="border border-gray-400 px-4 py-2">{runwayStats["32"].unconfirmed + runwayStats["14"].unconfirmed}</td>
        </tr>
        <tr>
        <td className=" px-4 py-2 font-medium">{}</td>
        <td className=" px-4 py-2">{}</td>
        <td className=" py-2">{}</td>
        <td className="border border-gray-400 !bg-gray-700 text-white px-4 py-2">{monthlyTotals.total}</td>
        </tr>
        </tbody>
        </table>
    </div> */}
<div ref={chartRef} className="print-area">
  <table className="table-auto border border-gray-400 w-full text-sm text-center mx-auto">
    
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-400 px-4 py-2">Run Way</th>
        <th className="border border-gray-400 px-4 py-2">R/W 14</th>
        <th className="border border-gray-400 px-4 py-2">R/W 32</th>
        <th className="border border-gray-400 px-4 py-2">
          Total Incidents
        </th>
      </tr>
    </thead>

    <tbody>
      {/* Confirm Row */}
      <tr>
        <td className="border border-gray-400 px-4 py-2 font-medium">
          Confirm
        </td>

        <td className="border border-gray-400 px-4 py-2">
          {runwayStats["14"].confirmed}
        </td>

        <td className="border border-gray-400 px-4 py-2">
          {runwayStats["32"].confirmed}
        </td>

        <td className="border border-gray-400 px-4 py-2 font-semibold">
          {runwayStats["14"].confirmed +
            runwayStats["32"].confirmed}
        </td>
      </tr>

      {/* Unconfirm Row */}
      <tr>
        <td className="border border-gray-400 px-4 py-2 font-medium">
          Unconfirm
        </td>

        <td className="border border-gray-400 px-4 py-2">
          {runwayStats["14"].unconfirmed}
        </td>

        <td className="border border-gray-400 px-4 py-2">
          {runwayStats["32"].unconfirmed}
        </td>

        <td className="border border-gray-400 px-4 py-2 font-semibold">
          {runwayStats["14"].unconfirmed +
            runwayStats["32"].unconfirmed}
        </td>
      </tr>

      {/* Grand Total Row */}
      <tr className="bg-gray-700 text-white font-bold">
        <td className="border border-gray-400 px-4 py-2">
          YEARLY TOTAL
        </td>

        <td className="border border-gray-400 px-4 py-2">
          {runwayStats["14"].confirmed +
            runwayStats["14"].unconfirmed}
        </td>

        <td className="border border-gray-400 px-4 py-2">
          {runwayStats["32"].confirmed +
            runwayStats["32"].unconfirmed}
        </td>

        <td className="border border-gray-400 px-4 py-2">
          {/* {monthlyTotals.total} */}
           {
      runwayStats["14"].confirmed +
      runwayStats["14"].unconfirmed +
      runwayStats["32"].confirmed +
      runwayStats["32"].unconfirmed
    }
        </td>
      </tr>
    </tbody>
  </table>
</div>
        <button onClick={handlePrint} className="btn !bg-gray-300 border-gray-400 w-[100%] text-center">
        Print PDF
        </button>
    
    </Modal.Body>
    </Modal>
</>
  );
}

export default  EditViewData;