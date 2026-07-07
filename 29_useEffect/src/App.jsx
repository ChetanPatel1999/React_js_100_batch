import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(20)
  const [num2, setnum2] = useState(70)
  const [color, setcolor] = useState("red")

  useEffect(() => {
    console.log("use effect is run...")
  }, [num])

  return (
    <div>
      <h1 style={{ color: color }} >num value = {num}</h1>
      <h1>num2 value = {num2}</h1>
      <button onClick={() => {
        setnum(num + 1);
      }}  >increase  value</button>
      <button onClick={() => {
        setnum2(num2 - 1);
      }}  >decrease  value</button>
      <button onClick={() => {
        setcolor("blue");
      }}  >change color</button>
    </div>
  )
}

export default App
