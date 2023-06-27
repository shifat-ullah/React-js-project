/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'

function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default App
