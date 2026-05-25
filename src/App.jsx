import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Dashboard from './pages/Dashboard'
// import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
