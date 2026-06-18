import React, { useState } from 'react'
const Example2 = () => {
    const [num, setnum] = useState(0)

    function increaseValue() {
        setnum(num + 1);
    }
    function decreaseValue() {
        setnum(num - 1);
    }
    return (
        <div>
            <h1 className='box'>{num}</h1>
            <button onClick={increaseValue} className='c-button'>increse value</button>
            <button onClick={decreaseValue} className='c-button'>decrese value</button>
        </div>
    )
}

export default Example2
