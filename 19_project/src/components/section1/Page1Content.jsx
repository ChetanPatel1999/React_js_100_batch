import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
    return (
        <div className=' w-full h-[85vh] px-16 pb-7 flex gap-10 justify-between'>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Page1Content
