import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Landing from './pages/Landing'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
