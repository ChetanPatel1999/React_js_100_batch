import React, { useState } from 'react'
import Nav from '../components/Nav'
import categories from '../category'
import Card from '../components/Card'
import { food_items } from '../food'


const Home = () => {
    const [foodCategories, setfoodCategories] = useState(food_items)
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
    return (
        <div className='w-full min-h-screen bg-slate-200 py-2 px-4 md:py-4 md:px-8'>
            <Nav />
            <div className='flex flex-wrap justify-center gap-5 mt-5 '>
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
            </div>

            <div className='flex flex-wrap justify-center items-center mt-8 gap-5 mb-4 '>
                {foodCategories.map((item, index) => {
                    return (
                        <Card key={index} name={item.food_name} price={item.price} type={item.food_type} id={item.id} image={item.food_image} />
                    )
                })}
            </div>

        </div>
    )
}

export default Home
