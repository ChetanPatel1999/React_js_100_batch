import React from 'react'

const User = ({ name, age = 90 }) => {
    return (
        <div>
            <h1>name : {name}</h1>
            <h1>age :{age}</h1>
        </div>
    )
}

export default User
