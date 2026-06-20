import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [todos, settodos] = useState([])
  function onSubmitHandler(evt) {
    evt.preventDefault();
    settodos([...todos, title])
    settitle("")
  }

  function deleteTask(deleteIndex)//2
  {
    let newtodos = todos.filter((task, index) => {
      return index != deleteIndex
    })

    settodos(newtodos);
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input onChange={evt => settitle(evt.target.value)}
          type='text' value={title} placeholder='Enter Task..' />
        <button>Add Task</button>
        <ul>
          {todos.map((task, index) => {
            return (<li key={index} > {task}  <button type="button" onClick={() => {
              deleteTask(index)
            }} >delete</button> </li>)
          })}
        </ul>
      </form>
    </div >
  )
}

export default App
