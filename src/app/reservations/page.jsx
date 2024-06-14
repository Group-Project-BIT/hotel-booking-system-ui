"use client";
import React, { useState } from 'react';
import { StickyNavbar } from "@/components/Navbar";
import {FooterWithSocialLinks} from "@/components/Footer";
import ReservationContainer from '@/components/reservations/ReservationContainer';

const ReservationsPage = () => {

    return (
        <div>
            <div>
                <StickyNavbar />
            </div>
            <div className='flex flex-auto justify-center'>
                <ReservationContainer />
            </div>
            <div>
                <FooterWithSocialLinks/>
            </div>
        </div>
    );
}

export default ReservationsPage;
