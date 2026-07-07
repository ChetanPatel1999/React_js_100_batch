import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import JoinUs from './pages/JoinUs'
import Navbar from './components/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/joinus' element={<JoinUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} >
          </Route>
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
