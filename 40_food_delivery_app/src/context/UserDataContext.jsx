import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext = createContext();
const UserDataContext = ({ children }) => {
    const [foodCategories, setfoodCategories] = useState(food_items)
    const [inputData, setinputData] = useState("")
    const [showCard, setshowCard] = useState(false)
    const data = {
        foodCategories,
        setfoodCategories,
        inputData,
        setinputData,
        showCard,
        setshowCard
    }
    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserDataContext
