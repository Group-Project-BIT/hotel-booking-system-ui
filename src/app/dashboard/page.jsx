"use client"
import React from 'react'
import { StickyNavbar } from '@/components/Navbar'
import { FooterWithSocialLinks } from '@/components/Footer'
import App from '@/components/dashboard/App'

export default function page() {
  return (
    <div>
            <div>
                <StickyNavbar />
            </div>
            <div className='ustify-center'>
                <App />
            </div>
            <div>
                <FooterWithSocialLinks/>
            </div>
        </div>
  )
}
