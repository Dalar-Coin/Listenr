import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Peaks from './pages/Exercises/Peaks'
import Dips from './pages/Exercises/Dips'
import PeaksDips from './pages/Exercises/PeaksDips'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Peaks" element={<Peaks />} />
        <Route path="/Dips" element={<Dips />} />
        <Route path="/PeaksDips" element={<PeaksDips />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
