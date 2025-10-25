import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Homepage from './Home Page/Homepage'
import Dashboard from './User page/Dashboard'
const App = () => {
  console.log("hello world");
  
  return (
    <div>
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App