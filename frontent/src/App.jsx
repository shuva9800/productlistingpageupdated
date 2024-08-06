import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Routes>
         <Route path='/' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         
      </Routes>
    </div>
  )
}

export default App
