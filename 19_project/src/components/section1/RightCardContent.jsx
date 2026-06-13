import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='flex flex-col justify-between p-8 absolute left-0 top-0 w-full h-full '>
            <div>
                <h2 className='text-xl font-medium bg-white w-9 h-9 rounded-full flex justify-center items-center' >{props.id + 1}</h2>
            </div>
            <div>
                <p className='leading-normal text-white font-medium mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta distinctio doloremque laudantium totam. Corrupti, officia.</p>
                <div className='flex justify-between' >
                    <button style={{ backgroundColor: props.color }} className='font-medium text-white px-6 py-1 rounded-full'>{props.tag}</button>
                    <button style={{ backgroundColor: props.color }} className='font-medium text-2xl bg-blue-500 text-white px-3 py-1 rounded-full' ><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
