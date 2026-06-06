import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import User from './components/User'

const App = () => {



  return (
    <div>
      <Header />
      <div className="parent">
        <Card bt="see profile" user="ravi sharma" image="https://images.unsplash.com/photo-1649433658557-54cf58577c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" />
        <Card bt="visit profile" user="ram patel" image="https://images.unsplash.com/photo-1669475535925-a011d7c31d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMGltYWdlfGVufDB8fDB8fHww" />
        <Card bt="my profile" user="alvish yadav" image="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMGltYWdlfGVufDB8fDB8fHww" />
      </div>
    </div>
  )
}


// const App = () => {

//   return (
//     <div>
//       <User name="ram" age={67} />
//       <User name="ravi" age={70} />
//       <User name="shyam"  />
//     </div>
//   )
// }

export default App
