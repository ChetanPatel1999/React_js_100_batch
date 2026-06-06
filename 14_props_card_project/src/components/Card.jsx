import React from 'react'
import Button from './Button'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.image}></img>
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button bt={props.bt} />
        </div>
    )
}

export default Card
