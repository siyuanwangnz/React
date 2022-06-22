import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function About() {
  const [number, setNumber] = useState(10);
  return (
    <div className="form">
      <h3>About</h3>
      <h5>Page will jump to Home when number is 20</h5>
      {number === 20 ? <Navigate to="/home" /> : <h4>Number: {number}</h4>}
      <button onClick={() => setNumber(number => number + 2)}>+ 2</button>
    </div>
  )
}
