import React from 'react'
import { useState } from 'react'
import './App.css'
import logo from './assets/Gemini_Generated_Image_docx7sdocx7sdocx.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl font-bold underline">
      hello Cargo! push test

      <img src={logo} alt="" className='w-1/2 m-auto mt-28' />
    </div>
  )
}

export default App
