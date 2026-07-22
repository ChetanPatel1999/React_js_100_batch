import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserDataContext';
const Nav = () => {
    const { inputData, setinputData, showCard, setshowCard } = useContext(dataContext)
    console.log(inputData)

    return (
        <div className='w-full h-15 flex justify-between '>
            <div className='w-15 h-15 bg-white flex justify-center items-center rounded-full shadow-md'>
                <MdFastfood className='text-green-500 text-3xl' />
            </div>
            <form className='bg-white w-[50%] md:w-[70%] h-15 rounded-md shadow-md flex items-center gap-2 md:gap-5 px-2 md:px-5'>
                <IoMdSearch className='text-green-500 text-2xl' />
                <input
                    value={inputData}
                    onChange={(evt) => setinputData(evt.target.value)}
                    className='w-full outline-none font-medium text-sm md:text-lg ' type='text' placeholder='Search Your Dish...' />
            </form >
            <div
                onClick={() => setshowCard(true)}
                className='w-15 h-15 cursor-pointer bg-white flex justify-center items-center rounded-md shadow-md relative'>
                <span className='absolute top-0 right-1.5 font-bold text-green-500' >0</span>
                <LuShoppingBag className='text-green-500 text-3xl' />
            </div>
        </div>
    )
}
export default Nav
