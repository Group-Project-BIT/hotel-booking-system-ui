import React, { useState } from "react";
import { Typography, Button, Select, Option } from "@material-tailwind/react";
import { StickyNavbar } from "./Navbar";
import DatePicker from "./DatePicker";


import { CarouselWithContent } from "./Carousell";
import { BookingCard } from "./Card";

const HomePage = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleSearchClick = () => {
    setIsCardVisible(true);
  };

  const descriptions = [
    "Delux room.",
    "Description for Booking Card 2: A serene getaway with breathtaking views.",
    "Description for Booking Card 3: Modern amenities in a historic setting."
  ];

  return (
    <div>
      <StickyNavbar />

      <header className="bg-blue-900 text-white py-40 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
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
          <div className="md:w-1/5 justify-self-flex-end">
            <img
              src="hotel-home.png"
              alt="Your image"
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>
      </header>

      <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="w-full md:w-1/3 relative">
            <label className="text-m text-black-500 absolute top-0 left-0 ml-20 mt-10" htmlFor="check-in">Check In</label>
            <DatePicker id="check-in" label="Check In" />
          </div>
          <div className="w-full md:w-1/3 relative mt-4 md:mt-0">
            <label className="text-m text-black-500 absolute top-0 left-0 ml-20 mt-10" htmlFor="check-out">Check Out</label>
            <DatePicker id="check-out" label="Check Out" />
          </div>
          <div className="w-full md:w-1/3 relative mt-0 md:mt-0">
            <label className="text-m text-black-500 absolute top-0 left-0 ml-3 mt-0" htmlFor="room-type"></label>
            <Select id="room-type" label="Select Room Type">
              <Option>Luxury</Option>
              <Option>Standard</Option>
              <Option>Premium</Option>
            </Select>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex w-max">
            <Button color="blue" onClick={handleSearchClick}>Search</Button>
          </div>
        </div>
      </div>

      {isCardVisible && (
        <div className="mt-10 mb-10 flex justify-center space-x-4">
       <BookingCard 
        title="Deluxe Room" 
        description="A spacious room with a great view and modern amenities." 
        imageSrc="Deluxe Room .jpg" 
      />
      <BookingCard 
        title="Standard Room" 
        description="Comfortable room with essential amenities for a pleasant stay." 
        imageSrc="Double room.jpg" 
      />
       <BookingCard 
        title="Executive Room" 
        description="Comfortable room with essential amenities for a pleasant stay." 
        imageSrc="Luxury room.jpg"  
      />
      <BookingCard 
        title="Double Room" 
        description="Comfortable room with essential amenities for a pleasant stay." 
        imageSrc="Premium room.jpg"  
      />
        </div>
      )}

      <div><CarouselWithContent /></div>
    </div>
  );
};

export default HomePage;
