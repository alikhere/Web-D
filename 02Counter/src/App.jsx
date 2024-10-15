import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // const [count, setCount] = useState(0)
  let [counter, setCount] = useState(0);



  const subValue = () => {
    if(counter != 0)
      setCount(counter-1);
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => {setCount(counter+1)}}>Increase value {counter}</button>
      <br />
      <br />
      <button onClick={subValue}>Decrease value {counter} </button>
    </>
  )
}

export default App
