import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { StickyNavbar } from "./Navbar";
import { CarouselWithContent } from "./Carousell";
import { BookingCard } from "./Card";
import { FooterWithSocialLinks } from "./Footer";
import EnquirySection from "./Enquiry";
import { useRouter } from "next/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Amazing experience! The service was exceptional and the room was very comfortable.",
      imageSrc: "per 02.jpg",
    },
    {
      name: "Jane Smith",
      feedback:
        "Beautiful location and friendly staff. Highly recommend for a relaxing getaway.",
      imageSrc: "person1.jpg",
    },
    {
      name: "Michael Brown",
      feedback:
        "The best hotel stay I've ever had. The amenities and service were top-notch.",
      imageSrc: "person03.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        What Our Guests Say
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 m-4 w-80"
          >
            <img
              src={testimonial.imageSrc}
              alt={testimonial.name}
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h3 className="text-xl font-bold text-center mt-4">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 text-center mt-2">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [roomTypes, setRoomTypes] = useState([]);
  const router = useRouter()
  useEffect(() => {
    fetchRoomTypes();
  }, []);
  const fetchRoomTypes = async () => {
    try {
      const response = await fetch("/api/roomTypes", {
        method: "GET",
      });

      const data = await response.json();
      setRoomTypes(data);
    } catch (error) {
      console.error("Error fetching room types:", error);
    }
  };


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

      <div className="mt-10 mb-10 flex flex-col items-center">
        <div className="flex justify-center space-x-4">
          {roomTypes.length > 0 ? (
            roomTypes?.map((roomtype, index) => (
              <BookingCard
                key={index}
                title={roomtype.type_name}
                description={roomtype.description}
                imageSrc={roomtype.room_type_imageUrl}
                isAvailable={true}
                price={120}
                adults={roomtype.adults_count}
                children={roomtype.children_count}
                className="w-80 h-96"
              />
            ))
          ) : (
            <p>No room types available</p>
          )}
        </div>
        <div className="mt-6">
          <Button color="blue" onClick={()=>router.push("/reservations")}>Book Now</Button>
        </div>
      </div>

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
