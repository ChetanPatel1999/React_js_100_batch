import React, { useState } from 'react'
const Example3 = () => {
    const [num, setnum] = useState(40)
    const [bgcolor, setbgcolor] = useState("red")
    const [color, setcolor] = useState("gray")
    const [className, setclassName] = useState("my-box")


    function changeValue() {
        setnum(10);
        setbgcolor("blue")
        setcolor("white")
    }

    return (
        <div>
            <div className={className} onMouseLeave={() => setclassName("my-box")} onMouseEnter={() => setclassName("my-div")}>
            </div>
            <h1 style={{ backgroundColor: bgcolor, color: color }} >value of num = {num}</h1>
            <button onClick={changeValue} >change value</button>
        </div >
    )
}

export default Example3
