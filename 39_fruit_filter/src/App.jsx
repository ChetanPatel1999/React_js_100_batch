import React, { useMemo, useRef, useState } from 'react'

const App = () => {
  let fruits = ["apple 🍎", "banana 🍌", "grape 🍇", "orange 🍊", "mango 🥭"]
  const [title, settitle] = useState("")
  const [cout, setcout] = useState(0)

  let c = useRef(0);
  c.current = c.current + 1;
  console.log(c.current);

  let myh1 = useRef(null);  // dom element store karne ke liye
  console.log(myh1.current);

  let filterItem = useMemo(() => {
    return (
      fruits.filter((fruit, idx) => {
        return fruit.includes(title);
      })
    )
  }, [title])


  return (
    <div className='bg-gray-900 h-screen text-white flex justify-center items-center'>
      <button onClick={() => setcout(cout + 1)} >click me!{cout}  </button>
      <div className='bg-gray-800 w-70 h-80 rounded flex flex-col justify-center gap-6 items-center '>
        <h1 ref={myh1} className='font-bold text-2xl'>🍃🍋🍌 Fruit Filter</h1>
        <input
          onChange={(evt) => { settitle(evt.target.value) }}
          className='border-gray-300 border w-60 py-2 pl-5 rounded outline-none'
          placeholder='Search Fruit'
          value={title}
        />
        <ol className=''>
          {
            filterItem.map((fruit, index) => {
              return (
                <li className='mb-2 text-gray-300' key={index}>{fruit}</li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default App
