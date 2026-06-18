import React, { useState } from 'react'
const Example1 = () => {
    const [num, setnum] = useState(40)
    const [name, setname] = useState("ram")
    const [arr, setarr] = useState([12, 34, 56])

    function changeValue() {
        setnum(10);
        setname("rydham");
        setarr([34, 56, 67])
    }

    return (
        <div>
            <h1>value of num = {num}</h1>
            <h1>my name is  = {name}</h1>
            <h1>array values : {arr}</h1>
            <button onClick={changeValue} >change value</button>
        </div>
    )
}

export default Example1
