import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
const Card = ({ name, id, price, type, image }) => {
    return (
        <div className='w-58  border-3 hover:border-green-500 border-transparent transition-all duration-300 shadow-md h-70 p-4 bg-white rounded-md flex flex-col gap-2'>
            <div className='h-40 overflow-hidden rounded-md ' >
                <img src={image} />
            </div>
            <div className='font-bold text-lg'>
                {name}
            </div>
            <div className='flex justify-between' >
                <div className='font-medium text-green-500'>
                    Rs {price} /-
                </div>
                <div className={(type == 'veg' ? "text-green-500" : "text-red-600") + " font-medium  flex items-center gap-2"} >
                    {type == "veg" ? <LuLeafyGreen /> : <GiChickenOven />}  <span>{type}</span>
                </div>
            </div>
            <button className='bg-green-500 cursor-pointer hover:bg-green-400 transition-all duration-300 text-white font-medium text-lg py-1 rounded-md'>Add to Dish</button>
        </div >
    )
}

export default Card
