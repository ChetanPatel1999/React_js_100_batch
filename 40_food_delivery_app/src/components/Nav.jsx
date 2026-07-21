import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
const Nav = () => {
    return (
        <div className='w-full h-15 flex justify-between '>
            <div className='w-15 h-15 bg-white flex justify-center items-center rounded-full shadow-md'>
                <MdFastfood className='text-green-500 text-3xl' />
            </div>
            <form className='bg-white w-[50%] md:w-[70%] h-15 rounded-md shadow-md flex items-center gap-2 md:gap-5 px-2 md:px-5'>
                <IoMdSearch className='text-green-500 text-2xl' />
                <input className='w-full outline-none font-medium text-sm md:text-lg ' type='text' placeholder='Search Your Dish...' />
            </form >
            <div className='w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-md relative'>
                <span className='absolute top-0 right-1.5 font-bold text-green-500' >0</span>
                <LuShoppingBag className='text-green-500 text-3xl' />
            </div>
        </div>
    )
}

export default Nav
