"use client"
import { ReservationContainer } from '@/components/reservation/ReservationContainer'
import React from 'react'
import { StickyNavbar } from "@/components/Navbar";

const ConfigarationPage = () => {
  return (
    <div>
      <StickyNavbar/>
      <div className='flex flex col justify-center items-center'>
        <ReservationContainer/>
      </div>
    </div>
    
  )
}

export default ConfigarationPage