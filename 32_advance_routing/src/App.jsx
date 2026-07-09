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
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
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
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetails />} />
      </Routes>
    </div>
  )
}

export default App
