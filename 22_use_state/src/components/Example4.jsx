import React, { useState } from 'react'

const Example4 = () => {
    const [user, setuser] = useState({ name: "ram", age: 20 })
    const [arr, setarr] = useState([12, 34, 67])
    function changeValue() {
        // let newUser = { ...user };
        // newUser.age = 90;
        // setuser(newUser);

        setuser({ ...user, age: 90 })

        setarr([...arr, 80])

    }
    return (
        <div>
            <h1>{user.name}  {user.age}</h1>
            <h1>{arr}</h1>
            <button onClick={changeValue}>click me</button>
        </div>
    )
}

export default Example4
