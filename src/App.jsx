import { useState } from 'react'
import './style/App.css'
import './style/root.css'
import './style/createBoard.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './menu'
import Dashboard from './dashboard'
import Settings from './settings'
import Login from './login'
import Signup from './signup'
import CreateBoard from './createBoard'
import Profile from './profile'
import CreatePassword from './createPassword'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/create-board" element={<CreateBoard />} />
          <Route path="/profile" element={<Profile />} />
            <Route path="/createpassword" element={<CreatePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
