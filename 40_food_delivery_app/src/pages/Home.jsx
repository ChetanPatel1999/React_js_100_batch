import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserDataContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'


const Home = () => {

    const { foodCategories, setfoodCategories, inputData, showCard, setshowCard } = useContext(dataContext);

    const [cart, setcart] = useState([])

    const addToCard = (food) => {

        let isExist = cart.find((item) => item.id == food.id)
        if (isExist) {
            const newCart = cart.map((item) => {
                return item.id == food.id ? { ...item, quantity: item.quantity + 1 } : item;
            })
            console.log(newCart)
            setcart(newCart);
        }
        else {
            setcart([...cart, food])
        }


    }

    function filter(category) {
        if (category == "All") {
            setfoodCategories(food_items);
        }
        else {
            let newlist = food_items.filter((item) => {
                return item.food_category == category;
            })

            setfoodCategories(newlist);
        }
    }
    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.toLowerCase().includes(inputData.toLowerCase()))
        setfoodCategories(newList);
    }, [inputData])
    return (
        <div className='w-full min-h-screen bg-slate-200 py-2 px-4 md:py-4 md:px-8'>
            <Nav />

            {inputData ? null : <div className='flex flex-wrap justify-center gap-5 mt-5 '>
                {categories.map((item, index) => {
                    return (
                        <div
                            onClick={() => filter(item.name)}
                            className='bg-white w-28 h-28 rounded-md shadow-md flex flex-col justify-center gap-4 pl-4 text-gray-500 text-md font-bold cursor-pointer hover:bg-green-200 transition-all duration-300'
                            key={index} >
                            {item.icon}
                            {item.name}
                        </div>
                    )
                })}
            </div>}


            <div className='flex flex-wrap justify-center items-center mt-8 gap-5 mb-4 '>
                {foodCategories.map((item, index) => {
                    return (
                        <Card key={index} addToCard={addToCard} name={item.food_name} price={item.price} type={item.food_type} quantity={item.food_quantity} id={item.id} image={item.food_image} />
                    )
                })}
            </div>

            {/* shoping card render code */}

            <div className={(showCard ? "translate-x-0" : "translate-x-full") + ' bg-white overflow-auto transition-all duration-500 w-[45vw]  h-screen fixed top-0 right-0 shadow-md p-6 '}>
                <header className='flex justify-between items-center text-green-500 font-semibold text-lg'>
                    <span>Order item</span>
                    <RxCross2
                        onClick={() => setshowCard(false)}
                        className='w-7 h-7 cursor-pointer hover:text-gray-600 transition-all duration-300' />
                </header>

                {
                    cart.map((item, index) => {
                        return <Card2 key={index} price={item.price} id={item.id} name={item.name} image={item.image} quantity={item.quantity} />
                    })
                }

                <div className='mt-4'>
                    <hr></hr>
                    <div className='flex mt-2 justify-between items-center'>
                        <h1>Subtotal</h1>
                        <h1 className='text-green-500'>Rs 399/-</h1>
                    </div>

                    <div className='flex mt-2 justify-between items-center'>
                        <h1>Delivery Fess</h1>
                        <h1 className='text-green-500'>Rs 20/-</h1>
                    </div>

                    <div className='flex mt-2 justify-between items-center'>
                        <h1>Texes</h1>
                        <h1 className='text-green-500'>Rs 1.995/-</h1>
                    </div>
                    <hr className='mt-2'></hr>
                    <div className='flex mt-2 justify-between items-center'>
                        <h1 className='text-xl font-bold'>Total</h1>
                        <h1 className='text-green-500 text-xl font-bold'>Rs 420/-</h1>
                    </div>
                    <button className='bg-green-500 text-white w-full rounded-md mt-2 h-10 font-bold'>Place Order</button>
                </div>
            </div>

        </div>
    )
}

export default Home
