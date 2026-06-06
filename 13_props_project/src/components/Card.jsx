import React from 'react'

function Card(props) {

    return (
        <div className='card'>
            <h1>hello , {props.user}</h1>
            <h1>age : {props.age}</h1>
            <h1>city : {props.city}</h1>
        </div>
    )
}

export default Card
