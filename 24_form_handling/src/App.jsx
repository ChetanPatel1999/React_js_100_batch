import React, { useState } from 'react'
function FormHandling() {
  function formSubmitHandler(evt) {
    evt.preventDefault();
    console.log("form submited")
  }
  return (
    <div>
      <form onSubmit={(evt) => {
        formSubmitHandler(evt)
      }
      }>
        < input type='text' placeholder='enter data..' />
        <button>submit</button>
      </form>
    </div >
  )
}

function TwoWayBinding() {
  const [title, settitle] = useState("")
  const [data, setdata] = useState("")
  function formSubmitHandler(evt) {
    evt.preventDefault();
    console.log("form submited")
    console.log(title)
    setdata(title);
    settitle("")
  }
  function onChangeValue(val) {
    settitle(val);
  }
  return (
    <div>
      <form onSubmit={(evt) => {
        formSubmitHandler(evt)
      }
      }>
        < input onChange={(evt) => {
          onChangeValue(evt.target.value)
        }} value={title} type='text' placeholder='enter data..' />
        <button>submit</button>
        <h1>{data}</h1>
      </form>
    </div >
  )
}

function ApniStyle() {
  const [title, settitle] = useState("")
  const [data, setdata] = useState("here display data")
  return (
    <form onSubmit={(evt) => {
      evt.preventDefault();
      setdata(title)
      settitle("")
    }}>
      <input onChange={(evt) => {
        settitle(evt.target.value)
      }} value={title} type='text' placeholder='enter data ...' />

      <button >submit</button>
      <h1>{data}</h1>
    </form>

  )
}
const App = () => {
  return (
    <div>
      <ApniStyle />
    </div>
  )
}

export default App
