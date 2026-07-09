import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <h1>Hello World Institute</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
                <Link to="/joinus">Join Us</Link>
                <Link to="/courses">Courses</Link>
            </div>
        </div>
    )
}

export default Navbar
