import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <h1>Hello World Institute</h1>
            <div className='links'>
                {/* anchor tag refresh page when perform routing */}
                {/* <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a> */}

                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact</Link>
                <Link to='/product' >Product</Link>
            </div>
        </div>
    )
}

export default Navbar
