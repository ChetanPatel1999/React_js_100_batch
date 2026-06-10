import React from 'react'
import style from './header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <h1>Hello Wolrd Institute</h1>
            <button className={style.btn}>log in</button>
        </div>
    )
}

export default Header
