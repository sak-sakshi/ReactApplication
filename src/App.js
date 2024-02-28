import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import './components/style.css'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App