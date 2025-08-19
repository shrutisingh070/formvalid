import { useState } from 'react'

import './App.css'

function App() {
  const [IsDisabled, setIsDisabled] = useState(false)
  const handleClick = () =>{
  
  setIsDisabled(true);
}
  return (
    <div className='container'>
  <h2>SMALL DEMO FOR DISABLED BUTTON</h2>
   <button onClick={handleClick}
           disabled={IsDisabled}
           className='my-button'>Click me!!!</button>
  </div>
  )
}

export default App
