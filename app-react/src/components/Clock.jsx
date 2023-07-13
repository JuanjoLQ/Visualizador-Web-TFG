import React, { useState , useEffect } from 'react'
import '../css/clock.css'

function Clock() {
  
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  });

  return (
    <div className='me-2'>
      <span className='d-flex align-items-center justify-content-center h-100 clock'>{date.toLocaleDateString()}, {date.toLocaleTimeString()}</span>
    </div>
  )
}

export default Clock