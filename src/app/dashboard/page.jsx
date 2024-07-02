"use client"
import React, { useEffect, useState } from 'react'
import { StickyNavbar } from '@/components/Navbar'
import { FooterWithSocialLinks } from '@/components/Footer'
import App from '@/components/dashboard/App'
import { useRouter } from 'next/navigation'
import { ClipLoader } from 'react-spinners'

export default function page() {
    const [loading, setLoading] = useState();
    const router = useRouter()
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true);
          }, 3000);
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
          router.push('/auth/sign-in'); // Redirect to login page if not logged in as admin
        }
    },[])
  return (
    <div>
            { loading?<><div>
                <StickyNavbar />
            </div>
            <div className='ustify-center'>
                <App />
            </div>
            <div>
                <FooterWithSocialLinks/>
            </div></>:
            <ClipLoader loading={loading}/>}
        </div>
  )
}
