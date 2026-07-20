import React from 'react'
import Nav from '../components/Nav'
import categories from '../category'

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-slate-200 py-2 px-4 md:py-4 md:px-8'>
            <Nav />
            <div className='flex flex-wrap justify-center gap-5 mt-5'>
                {categories.map((item, index) => {
                    return (
                        <div
                            className='bg-white w-28 h-28 rounded-md shadow-md flex flex-col justify-center gap-4 pl-4 text-gray-500 text-md font-bold'
                            key={index} >
                            {item.icon}
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
