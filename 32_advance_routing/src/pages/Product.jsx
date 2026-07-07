import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: '900' }}>Product page</h1>
            <div className='box'>
                <Link to='women'>Women</Link>
                <Link to='men'>men</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Product
