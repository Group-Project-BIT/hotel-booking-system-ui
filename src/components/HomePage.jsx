"use client"
import { Typography } from "@material-tailwind/react";
import React from "react";
import { StickyNavbar } from "./Navbar";
import Example from "./DatePicker";
import { Button } from "@material-tailwind/react";
import DatePicker from "./DatePicker";
import { CarouselWithContent } from "./Carousel";



const HomePage = () => {
  return (
    <div>
      <StickyNavbar />

      <header className="bg-blue-900 text-white py-40 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            {" "}
            {/* Changed order */}
            <h1 className="text-6xl font-bold">Sign in, save money</h1>
            <br />
            <div className="container mx-auto">
              <p className="text-2xl font-bold">
                Save 10% or more at participating properties.
                <br />
                Just look for the blue Genius label.
              </p>
            </div>
          </div>

          <div className="md:w-1/5 justify-self-flex-end ">
            {" "}
            {/* Changed order */}
            <img
              src="hotel-home.png"
              alt="Your image"
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>
      </header>
      

      <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg ">
        <div className="flex justify-center gap-1">
          <div className="w-1/2 relative">
            <span className="text-m text-black-500 absolute top-0 left-10 ml-10 mt-10">
              Check In
            </span>
            <DatePicker label="Check In" />
          </div>
          <div className="w-1/2 relative">
            <span className="text-m text-black-500 absolute top-0 left-10 ml-10 mt-10">
              Check Out
            </span>
            <DatePicker label="Check Out" />
          </div>
        </div>
        <div className="flex justify-center">
        <div className="flex w-max gap-4">
          <Button color="blue">Search</Button>
        </div>
      </div>
      </div>

      <div><CarouselWithContent/></div>
     
    </div>
  );
};

export default HomePage;
