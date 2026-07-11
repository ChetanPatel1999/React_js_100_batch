import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const  {theme}  = useContext(ThemeDataContext);
    return (
        <div className={theme ? 'light' : 'dark'}>
            <h1>Hello world institue</h1>
            <Nav2 />
        </div>
    )
}

export default Navbar
