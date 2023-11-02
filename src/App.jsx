import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { DARK_MODE_CODE } from './utils/constant'


function App() {
  return (
    <>
      <div className={`fixed top-0 w-full bg-white dark:bg-[#0f0f0f]`}><Header/></div>
      <div className='mt-20'><Body/></div>
    </>
  )
}

export default App
