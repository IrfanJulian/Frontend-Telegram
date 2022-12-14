import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ChatAll from '../components/module/chat/all'
import ChatImportent from '../components/module/chat/importent'
import ChatUnread from '../components/module/chat/unread'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import Home from '../pages/home'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to='home' replace='true' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/chat/all' element={<ChatAll />} />
            <Route path='/chat/importent' element={<ChatImportent />} />
            <Route path='/chat/unread' element={<ChatUnread />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router