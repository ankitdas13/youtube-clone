import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  return (
    <>
      <div className='fixed top-0 w-full bg-white'><Header/></div>
      <div className='mt-20'><Body/></div>
    </>
  )
}

export default App
