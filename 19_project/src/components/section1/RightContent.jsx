import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    // console.log(props.users)
    return (
        <div id="right" className=' h-full w-3/4 flex gap-10 overflow-x-auto pb-7'>
            {props.users.map((ele, idx) => {
                return <RightCard id={idx} image={ele.image} tag={ele.tag} color={ele.color} />
            })}
        </div>
    )
}

export default RightContent
