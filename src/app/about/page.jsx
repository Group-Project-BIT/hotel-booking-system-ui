"use client";
import React, { useState } from 'react';
import { StickyNavbar } from "@/components/Navbar";
import {FooterWithSocialLinks} from "@/components/Footer";
import AboutUs from '@/components/about/About'

const AboutPage = () => {

    return (
        <div>
            <div>
                <StickyNavbar />
            </div>
            <div className='flex flex-auto justify-center'>
            <AboutUs/>
            </div>
            <div>
                <FooterWithSocialLinks/>
            </div>
        </div>
    );
}

export default AboutPage;

