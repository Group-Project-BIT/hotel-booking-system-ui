import React, { useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import DatePicker from "./DatePicker";
import { StickyNavbar } from "./Navbar";
import { CarouselWithContent } from "./Carousell";
import { BookingCard } from "./Card";
import { FooterWithSocialLinks } from "./Footer";
import EnquirySection from "./Enquiry";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Amazing experience! The service was exceptional and the room was very comfortable.",
      imageSrc: "per 02.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "Beautiful location and friendly staff. Highly recommend for a relaxing getaway.",
      imageSrc: "person1.jpg",
    },
    {
      name: "Michael Brown",
      feedback: "The best hotel stay I've ever had. The amenities and service were top-notch.",
      imageSrc: "person03.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Guests Say</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
            <img
              src={testimonial.imageSrc}
              alt={testimonial.name}
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h3 className="text-xl font-bold text-center mt-4">{testimonial.name}</h3>
            <p className="text-gray-600 text-center mt-2">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



const HomePage = () => {
  const [checkIn, setCheckIn] = useState("checkIn");
  const [checkOut, setCheckOut] = useState("checkOut");
  const [roomType, setRoomType] = useState("roomType");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleSearchClick = () => {
    const searchData = {
      checkIn,
      checkOut,
      roomType,
    };

    const endpoint = `https://yourapi.com/search?checkIn=${searchData.checkIn}&checkOut=${searchData.checkOut}&roomType=${searchData.roomType}`;
    
    console.log(endpoint);
    setIsCardVisible(true);
  };

  return (
    <div>
      <StickyNavbar />

      <header className="bg-blue-900 text-white py-40 relative" style={{ backgroundImage: "url('header-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold">Relax & Recharge.</h1>
            <p className="text-2xl font-bold mt-4">Book Your Getaway Today!</p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="hotel-home.png"
              alt="Your image"
              className="rounded-lg shadow-md w-80 h-80"
            />
          </div>
        </div>
      </header>

      <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 mt-10 mx-6 lg:mx-24 relative" style={{ backgroundImage: "url('booking-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="w-full md:w-1/3 relative mb-4 md:mb-0">
            <label
              className="text-m text-gray-500 absolute top-0 left-0 ml-20 mt-10"
              htmlFor="check-in"
            >
              Check In
            </label>
            <DatePicker
              id="check-in"
              label="Check In"
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
            />
          </div>
          <div className="w-full md:w-1/3 relative mb-4 md:mb-0">
            <label
              className="text-m text-gray-500 absolute top-0 left-0 ml-20 mt-10"
              htmlFor="check-out"
            >
              Check Out
            </label>
            <DatePicker
              id="check-out"
              label="Check Out"
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
            />
          </div>
          <div className="w-full md:w-1/3 relative">
            <Select
              id="room-type"
              label="Select Room Type"
              value={roomType}
              onChange={(selectedOption) => setRoomType(selectedOption.value)}
            >
              <Option value="Luxury">Deluxe Room</Option>
              <Option value="Standard">Executive Room</Option>
              <Option value="Premium">Standard Room</Option>
            </Select>
          </div>
        </div>
        <div className="flex justify-center">
          <Button color="blue" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
      </div>

      {isCardVisible && (
        <div className="mt-10 mb-10 flex justify-center space-x-4">
          <BookingCard
            title="Deluxe Room"
            description="This deluxe room offers extra space, upscale furnishings, a larger bed, premium amenities, and enhanced comfort compared to standard rooms."
            imageSrc="Deluxe Room .jpg"
            isAvailable={true}
            price={120}
            className="w-80 h-96"
          />
          <BookingCard
            title="Standard Room"
            description="This standard room is a basic hotel accommodation with essential amenities, including a bed, bathroom, desk, and basic furnishings, designed for a comfortable stay."
            imageSrc="Double room.jpg"
            isAvailable={false}
            price={100}
            className="w-80 h-96"
          />
          <BookingCard
            title="Executive Room"
            description="An executive room offers additional space, upgraded furnishings, a larger work area, and enhanced amenities, often including access to exclusive hotel services or lounges, ideal for business travelers."
            imageSrc="Luxury room.jpg"
            isAvailable={true}
            price={110}
            className="w-80 h-96"
          />
          <BookingCard
            title="Presidential Room"
            description="An executive room offers additional space, upgraded furnishings, a larger work area, and enhanced amenities, often including access to exclusive hotel services or lounges, ideal for business travelers."
            imageSrc="Luxury room.jpg"
            isAvailable={true}
            price={110}
            className="w-80 h-96"
          />
        </div>
      )}

      <CarouselWithContent />

      <div className="my-20">
        <Testimonials />
      </div>

      <div className="my-20">
        <EnquirySection/>
      </div>

  
      <FooterWithSocialLinks />
    </div>
  );
};

export default HomePage;
