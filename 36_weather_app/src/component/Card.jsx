import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
const Card = () => {
    const [title, settitle] = useState("")
    const [weatherData, setweatherData] = useState(false)
    const [disp, setdisp] = useState(false)
    const search = async (city) => {
        try {
            if (city == "") {
                setdisp(true);
                return;
            }
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            console.log(response)
            if (!response.ok) {
                alert("city name is invalid");
                return;
            }
            setdisp(false);
            setweatherData({
                location: data.name,
                temp: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                iconId: data.weather[0].icon
            })
        }
        catch (error) {
            console.log("url is in correct");
            setweatherData(false);
        }
    }
    useEffect(() => {
        search("london")
    }, [])

    const imageUrl = `https://openweathermap.org/img/wn/${weatherData.iconId}@2x.png`;

    return (


        <div className='bg-linear-to-b from-blue-400 to-blue-900 h-100  w-75 p-7 rounded-xl'>

            <div className=' flex justify-center gap-5 ' >


                <input
                    onChange={evt => settitle(evt.target.value)}
                    value={title}
                    className='bg-white rounded-full p-1 border-none pl-4 outline-none '
                    type='text' placeholder='Search...' />




                <button
                    onClick={() => {
                        search(title);
                        settitle("")
                    }}
                    className='bg-white p-3 rounded-full' >
                    <FaSearch />
                </button>
            </div>
            <p className={`${disp ? "block" : "hidden"} text-red-600 text-sm font-normal`}>
                please enter city name</p>
            {weatherData ? <>
                <div className='flex justify-center mt-8' >
                    <img src={imageUrl} />
                </div>

                <div className='text-white' >
                    <div className='flex justify-center mt-6 text-3xl font-bold  '>
                        <h1>{weatherData.temp}&deg; c</h1>
                    </div>
                    <div className='flex justify-center text-2xl '>
                        <p>{weatherData.location}</p>
                    </div>
                </div>

                <div className='flex justify-between text-white mt-5'>

                    <div className='flex gap-2'>
                        <MdOutlineWaves className='mt-1' />
                        <div>
                            <h3>{weatherData.humidity}%</h3>

                            <p>Humidity</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <FaWind className='mt-1' />
                        <div>
                            <h3>{weatherData.windSpeed} Km/h</h3>

                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </> : <></>}

        </div>

    )
}
export default Card