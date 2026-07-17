import React from 'react'

const Navbar = ({ setcategory }) => {
    return (
        <div className='p-4 bg-gray-900 flex gap-5'>
            <button onClick={() => {
                console.log("hello")
                setcategory("general")

            }} className='bg-white text-black py-2 px-4 rounded font-black'  >NewsMag</button>
            <button onClick={() => {
                setcategory("technology")
                console.log("tech")
            }} className='text-gray-200 font-medium text-sm' >Technology</button>
            <button onClick={() => setcategory("business")} className='text-gray-200 font-medium text-sm' >Business</button>
            <button onClick={() => setcategory("health")} className='text-gray-200 font-medium text-sm' >Health</button>
            <button onClick={() => setcategory("sports")} className='text-gray-200 font-medium text-sm' >Sports</button>
            <button onClick={() => setcategory("entertainment")} className='text-gray-200 font-medium text-sm' >Entertainment</button>
        </div>
    )
}

export default Navbar
