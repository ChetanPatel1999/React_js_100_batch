import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const { theme, settheme } = useContext(ThemeDataContext);
    console.log(settheme)
    return (
        <button onClick={() => {
            settheme(!theme);
        }}>change_theme</button>
    )
}

export default Button
