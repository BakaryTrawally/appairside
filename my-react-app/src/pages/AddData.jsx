import React from 'react'
import "../index.css"
import '../App.css';


import BirdStrikeChart from './BirdsStrikeCharts';
const AddData = () => {
  return (
    <>
    <BirdStrikeChart month={3} year={2026} />
    </>
  )
}

export default AddData;