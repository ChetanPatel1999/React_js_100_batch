import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props)
    return (
        <div className='relative overflow-hidden h-full w-[30%] rounded-4xl shrink-0'>
            <img className='w-full h-full object-cover' src={props.image} />
            <div className='bg-black w-full h-full absolute top-0 left-0 opacity-50' ></div>
            <RightCardContent tag={props.tag} id={props.id} color={props.color} />
        </div>
    )
}

export default RightCard
