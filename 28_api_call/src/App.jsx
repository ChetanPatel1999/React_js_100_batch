import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  // async function getData() {
  //   let response = await fetch("https://dog.ceo/api/breeds/image/random");
  //   let data = await response.json()
  //   console.log(data);
  // }

  const [url, seturl] = useState(null)
  // const getData = async () => {
  //   let response = await fetch("https://dog.ceo/api/breeds/image/random");
  //   let data = await response.json()
  //   console.log(data);
  //   seturl(data.message)
  // }

  // const getData = async () => {
  //   let response = await axios.get("https://dog.ceo/api/breeds/image/random");
  //   console.log(response.data);
  // }

  const getData = async () => {
    let { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    seturl(data.message);
  }

  return (
    <div>
      <img src={url} />
      <button onClick={getData}>getData</button>
    </div>
  )
}

export default App
