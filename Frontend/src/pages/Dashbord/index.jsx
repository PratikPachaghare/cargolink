import React from 'react'
import CargoSearchBox from './componets/CargoSearchBox/CargoSearchBox'
import MainBanner from './componets/banner/MainBanner'
import VehicleSelector from './componets/vihicaleSelector'
import TruckAnimation from './componets/TuckAnimation/TruckAnimation'
import WhyChooseUs from './componets/StateBox'




export default function Dashbord() {
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
