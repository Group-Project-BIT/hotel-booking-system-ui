import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
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
  const [isCardVisible, setIsCardVisible] = useState(true);

  return (
    <div>
      <StickyNavbar />

      <header className="inset-0 bg-black bg-opacity-50 text-white py-40 relative" style={{ backgroundImage: "url('home.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
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

      {isCardVisible && (
        <div className="mt-10 mb-10 flex flex-col items-center">
          <div className="flex justify-center space-x-4">
            <BookingCard
              title="Deluxe Room"
              description="This deluxe room offers extra space, upscale furnishings, a larger bed, premium amenities, and enhanced comfort compared to standard rooms."
              imageSrc="Deluxe Room .jpg"
              isAvailable={true}
              price={120}
              adults={2}
              children={2}
              className="w-80 h-96"
            />
            <BookingCard
              title="Standard Room"
              description="This standard room is a basic hotel accommodation with essential amenities, including a bed, bathroom, desk, and basic furnishings, designed for a comfortable stay."
              imageSrc="Double room.jpg"
              isAvailable={false}
              price={100}
              adults={2}
              children={2}
              className="w-80 h-96"
            />
            <BookingCard
              title="Executive Room"
              description="An executive room offers additional space, upgraded furnishings, a larger work area, and enhanced amenities, often including access to exclusive hotel services or lounges, ideal for business travelers."
              imageSrc="Luxury room.jpg"
              isAvailable={true}
              price={110}
              adults={2}
              children={2}
              className="w-80 h-96"
            />
            <BookingCard
              title="Presidential Room"
              description="An executive room offers additional space, upgraded furnishings, a larger work area, and enhanced amenities, often including access to exclusive hotel services or lounges, ideal for business travelers."
              imageSrc="Luxury room.jpg"
              isAvailable={true}
              price={110}
              adults={2}
              children={2}
              className="w-80 h-96"
            />

          </div>
          <div className="mt-6">
            <Button color="blue">Book Now</Button>
          </div>
        </div>
      )}

      <CarouselWithContent />

      <div className="my-20">
        <Testimonials />
      </div>

      <div className="my-20">
        <EnquirySection />
      </div>

      <FooterWithSocialLinks />
    </div>
  );
};

export default HomePage;
