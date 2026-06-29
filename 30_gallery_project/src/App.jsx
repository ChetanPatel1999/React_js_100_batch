import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
  const [disp, setdisp] = useState(false)
  const getData = async () => {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    console.log(response.data)
    setuserData(response.data);
    setdisp(true)
  }

  useEffect(() => {
    getData();
  }, [index])

  let printUserData = <h1 className='fixed top-1/2 left-1/2 -translate-1/2 font-bold text-2xl text-gray-200'>Loding...</h1>
  if (userData.length > 1) {
    printUserData = userData.map((elem, idx) => {
      return <div>
        <a href={elem.url} target='_blank'>
          <div className='w-46 h-48 rounded overflow-hidden'>
            <img className='h-full w-full object-cover' src={elem.download_url} />
          </div>
          <h1 className='font-medium'>{elem.author}</h1>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen text-white overflow-auto p-5'>
      <h1 className='bg-red-500 w-fit text-6xl font-black px-5 py-2 fixed'>{index}</h1>
      <div className='flex flex-wrap gap-4 '>
        {
          printUserData
        }
      </div>
      <div className={`${disp ? "flex" : "hidden"} flex justify-center items-center gap-6 mt-6`}>
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
              setdisp(false)
              setuserData([])
            }
          }}
          className='bg-amber-300 active:scale-95 font-bold text-black px-5 py-2 rounded'>Prev</button>
        <h1 className='font-medium'>page - {index}</h1>
        <button
          onClick={() => {
            setindex(index + 1)
            setdisp(false)
            setuserData([])
          }}
          className='bg-amber-300 active:scale-95 font-bold text-black px-5 py-2 rounded'>Next</button>
      </div>
    </div>
  )
}

export default App
