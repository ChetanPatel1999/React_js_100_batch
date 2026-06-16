import React from 'react'

const App = () => {

  function printMsg() {
    console.log("button is clicked");
  }

  function secondMsg() {
    console.log("double clicked on button");
  }

  // how to call a parameterized function

  function datapass(data) {
    console.log("my name is : ", data)
  }

  return (
    <div>
      {/* <button onClick={printMsg}>click me!</button> */}

      <button onClick={() => {
        console.log("use arrow function");
        console.log("button is clicked");
      }}>click me!</button>

      {/* <button onClick={function msg() {
        console.log("inside react code");
      }}>click me!</button> */}

      <button onDoubleClick={secondMsg} onMouseEnter={() => {
        console.log("on mouse over perform");
      }} >next button</button>

      <input onChange={() => {
        console.log("typing in input");
      }} type="text" placeholder='typing here...' />

      <button onClick={function () {
        datapass("ram");
      }} >button</button>


      <button onClick={(evt) => {
        console.log(evt.target.innerText)
      }}>evt details</button>
    </div>
  )
}

export default App
