import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(50)
  function changeValue() {
    setnum(90)
  }
  return (
    <div>
      <h1>value of num = {num}</h1>
      <button onClick={changeValue} >change value</button>
    </div>
  )
}

export default App
