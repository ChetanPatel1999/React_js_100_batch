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

  function changeValue(val) {
    console.log(val)
  }
  function onScrolling(val) {
    if (val > 0) {
      console.log("page is scroling seeda  ")
    }
    else {
      console.log("page is scroling ulta  ")
    }
  }
  return (
    <div onWheel={(evt) => {
      onScrolling(evt.deltaY)
    }}>
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
        console.log(evt)
      }}>evt details</button>


      <input onChange={(evt) => {
        changeValue(evt.target.value)
      }} type="text" placeholder='Enter Text here' />


      <div className='my-div' onMouseMove={(evt) => {
        console.log("x = ", evt.clientX, "y = ", evt.clientY)
      }}  >
      </div>

      <div className='box' onClick={() => {
        console.log("div is clicked")
      }}>
        <button onClick={(evt) => {
          evt.stopPropagation();
          console.log("button is clicked")
        }}>click me </button>
      </div>


    </div>

  )
}

export default App
