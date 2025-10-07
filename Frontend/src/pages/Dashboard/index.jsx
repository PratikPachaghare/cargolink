import React from 'react'
import CargoSearchBox from './components/CargoSearchBox/CargoSearchBox'
import MainBanner from './components/banner/MainBanner'
import VehicleSelector from './components/vihicaleSelector'
import TruckAnimation from './components/TuckAnimation/TruckAnimation'
import WhyChooseUs from './components/StateBox'




export default function Dashboard() {
  return (
    <div>
      <MainBanner/>
      <CargoSearchBox/>
      <TruckAnimation/>
      <VehicleSelector/>
      <WhyChooseUs/>
    </div>
  )
}