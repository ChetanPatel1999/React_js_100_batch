import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent' >
      <Card user="aman" age={18} city="indore" />
      <Card user="ravi" age={40} city="ujjain" />
      <Card user="yuvraj" age={15} city="bhopal" />
      <Card user="mohit" age={22} city="indore" />
    </div>
  )
}

export default App
