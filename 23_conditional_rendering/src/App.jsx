import React, { useState } from 'react'

//if else rendering
function UserStatus() {
  const isLogin = true;
  if (isLogin) {
    return <h1>welcome to user</h1>
  }
  return <h1>please log in </h1>
}

//ternary 
function App1() {
  const isLogin = false;
  return (
    <div>
      {
        isLogin ? (<h1>welcome to user</h1>)
          : (<h1>please log in </h1>)
      }
    </div>
  )
}

//logical opereter
function App2() {
  const isAdimin = false;
  return (
    <div>
      <h1>welcome to user dashboard</h1>
      {isAdimin && <button>delete user</button>}
    </div>
  )
}


//switch case
function App3() {
  const role = "guest";
  switch (role) {
    case "admin":
      return <h1>Admin Panel</h1>;
    case "user":
      return <h1>User Dashboard</h1>;
    case "guest":
      return <h1>Guest Area</h1>;
    default:
      return <h1>Access Denied</h1>;
  }
}

//hide show component
function App4() {
  const [show, setshow] = useState(true)

  function showElement() {
    setshow(!show)
  }
  return (
    <div>
      <button onClick={showElement}>hide-show</button>
      {show && <h1>this is heading</h1>}
    </div>
  )
}

function App5() {
  const [show, setshow] = useState("visible")

  function showElement() {
    if (show == "visible") {
      setshow("hidden")
    }
    else {
      setshow("visible")
    }
  }
  return (
    <div>
      <h1 style={{ visibility: show }}>this is heading</h1>
      <button onClick={showElement}>hide-show</button>

    </div>
  )
}

function App6() {
  const [show, setshow] = useState(true)

  function showElement() {
    setshow(!show)
  }
  return (
    <div>
      <h1 style={{ visibility: show ? "visible" : "hidden" }}>this is heading</h1>
      <button onClick={showElement}>hide-show</button>
    </div>
  )
}

function App7() {
  const [show, setshow] = useState(true)

  function showElement() {
    setshow(!show)
  }
  return (
    <div>
      <h1 className={show ? "red-color" : "blue-color"}>this is heading</h1>
      <button onClick={showElement}>hide-show</button>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <App7 />
    </div>
  )
}

export default App
