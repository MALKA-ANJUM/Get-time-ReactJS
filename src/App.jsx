import React from 'react'
import { useState } from 'react';
import './index.css'

function App() {
  let time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  return (
    <div className='container'>
      <div className='content'>
      <h1>{ctime}</h1>
      <button onClick={updateTime}>Get Time</button>
      </div>
    </div>
  );
}

export default App;
