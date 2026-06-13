import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const SectionOne = (props) => {
    // console.log(props.users)
    return (
        <div className='w-full h-screen'>
            <Navbar />
            <Page1Content users={props.users} />
        </div>
    )
}

export default SectionOne
