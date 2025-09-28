import React from 'react'
import { useState } from 'react'
import './App.css'
import Dashbord from './pages/Dashbord'
import Navbar from './componets/Navbar'
import CargoSearchBox from './pages/Dashbord/componets/CargoSearchBox/CargoSearchBox'
import CargolinkFooter from './componets/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl font-bold underline">
      <Navbar/>
      <Dashbord/>
      <CargolinkFooter/>
    </div>
  )
}

export default App
