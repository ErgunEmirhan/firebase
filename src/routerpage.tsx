import React from 'react'
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import Login from './page/Login'
import DefPage from './page/DefPage'
import Yarisma from './page/Yarisma'
import Home from './page/Home'
function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/defPage' element={<DefPage/>} />
        <Route path='/Yarisma' element={<Yarisma/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterPage