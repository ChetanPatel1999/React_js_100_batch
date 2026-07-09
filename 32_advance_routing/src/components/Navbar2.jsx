import React from 'react'
import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
    const navigate = useNavigate();
    return (
        <div className='btn-box'>
            <button
                onClick={() => {
                    navigate("/")
                }}
                className='btn'>return to home
            </button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='btn'>back
            </button>
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='btn'>next
            </button>
        </div>
    )
}

export default Navbar2
