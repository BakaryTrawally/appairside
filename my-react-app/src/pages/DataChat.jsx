import React from 'react'
import "../index.css"
import '../App.css'
import BirdStrikeChart from './BirdsStrikeCharts';

const DataChat = () => {
  return (
    <div className='text-center h-16'> 
      <h1>this is my line chats</h1>    
      <BirdStrikeChart month={3} year={2026} />
     </div>
  )
}

export default DataChat
