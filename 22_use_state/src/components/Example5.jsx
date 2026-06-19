import React, { useState } from 'react'

const Example5 = () => {
    const [num, setnum] = useState(10)
    const [arr, setarr] = useState([12, 34, 56])
    function changeValue() {
        setnum(prev => prev + 1);
        setnum(prev => prev + 1);
        setnum(prev => prev + 1);
        setarr(prev => [...prev, 90]);
        setarr(prev => [...prev, 80]);


    }
    return (
        <div>
            <h1>value of num = {num}</h1>
            <h1>value of arr = {arr}</h1>
            <button onClick={changeValue}>click me</button>
        </div>
    )
}

export default Example5 
