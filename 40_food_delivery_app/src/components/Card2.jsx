import React, { useContext } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { dataContext } from '../context/UserDataContext';
const Card2 = ({ name, id, price, quantity, image }) => {

    const { cart, setcart } = useContext(dataContext);

    const inscreaseQuantity = (id) => {
        let newCart = cart.map((item) => {
            return item.id == id ? { ...item, quantity: item.quantity + 1 } : item;
        })
        setcart(newCart);
    }

    const decreaseQuantity = (id) => {
        let newCart = cart.map((item) => {
            return item.id == id ? { ...item, quantity: item.quantity - 1 } : item;
        }).filter((item) => item.quantity > 0)

        setcart(newCart);
    }
    const deleteItem = (id) => {
        let newCart = cart.filter((item) => item.id != id)
        setcart(newCart);
    }



  

    return (
        <div className='bg-white mt-2 rounded-md shadow-lg p-2 flex justify-between items-center'>
            <div className='flex gap-3 justify-start items-center' >
                <div className='w-45 h-25 rounded-md overflow-hidden'>
                    <img className='object-cover' src={image} />
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h1 className='text-gray-800 text-md font-bold'>{name}</h1>
                    <div className='flex  font-bold justify-center gap-3  border-2 rounded-xl text-green-500'>
                        <button
                            onClick={() => {
                                decreaseQuantity(id)

                            }}
                            className='text-xl flex justify-center items-center w-8'>-</button>
                        <span className='bg-gray-300 w-8 flex justify-center items-center'>{quantity}</span>
                        <button
                            onClick={() => inscreaseQuantity(id)}
                            className='text-xl flex justify-center items-center w-8'>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-end'>
                <h1 className='text-green-500 text-lg font-medium'>Rs {price}/-</h1>
                <RiDeleteBin6Line
                    onClick={() => {
                        deleteItem(id);
                    }}
                    className='text-red-500' />
            </div>
        </div>
    )
}

export default Card2
