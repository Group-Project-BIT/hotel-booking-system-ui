"use client"
import React from 'react';
import { RatingWithText } from './Rating';



const AboutUs = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
            <img className="w-full h-64 object-cover" src="hotel about.jpg" alt="ZION Hotel" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Welcome to ZION Hotel</h2>
            </div>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">About Us</h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6 space-y-4">
              <p className="text-gray-700 text-base leading-6">
                Welcome to ZION, your ultimate destination for comfort and luxury. Nestled in the heart of the city, ZION offers a serene escape from the hustle and bustle of everyday life. Our mission is to provide our guests with an unforgettable stay, combining the finest in hospitality and modern amenities.
              </p>
              <p className="text-gray-700 text-base leading-6">
                Established in 2020, ZION has quickly become a favorite among travelers seeking a unique and personalized experience. Our hotel features a variety of beautifully appointed rooms and suites, each designed with your comfort in mind. Whether you're here for business or leisure, we have the perfect accommodations to suit your needs.
              </p>
              <p className="text-gray-700 text-base leading-6">
                At ZION, we pride ourselves on our exceptional service. Our dedicated staff is here to ensure that your stay is as comfortable and enjoyable as possible. From our 24-hour concierge service to our on-site dining options, we go above and beyond to make your visit special.
              </p>
              <p className="text-gray-700 text-base leading-6">
                Our hotel is equipped with state-of-the-art facilities, including a fitness center, spa, and conference rooms, making it an ideal choice for both relaxation and business gatherings. Enjoy a meal at our signature restaurant, relax by the pool, or explore the local attractions – there's something for everyone at ZION.
              </p>
              <div className="mt-6 flex justify-center">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Our Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="overflow-hidden shadow-lg rounded-lg">
                <img className="w-full h-40 object-cover" src="hotel room.jpg" alt="Luxurious Rooms" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">Luxurious Rooms</h4>
                  <p className="text-gray-600 mt-2">Experience the best in comfort and style with our elegantly designed rooms and suites.</p>
                </div>
              </div>
              <div className="overflow-hidden shadow-lg rounded-lg">
                <img className="w-full h-40 object-cover" src="hotel spa.jpg" alt="Relaxing Spa" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">Relaxing Spa</h4>
                  <p className="text-gray-600 mt-2">Rejuvenate your mind and body with our state-of-the-art spa facilities.</p>
                </div>
              </div>
              <div className="overflow-hidden shadow-lg rounded-lg">
                <img className="w-full h-40 object-cover" src="Conference Room.jpg" alt="Conference Rooms" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">Conference Rooms</h4>
                  <p className="text-gray-600 mt-2">Host your business meetings and events in our fully equipped conference rooms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Reviews Section */}
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Guest Reviews</h3>
            <div className="mt-6 space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold">"An unforgettable experience!"</p>
                <p className="text-gray-600 mt-1">- John Doe</p>
                <RatingWithText/>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold">"Excellent service and beautiful rooms."</p>
                <p className="text-gray-600 mt-1">- Jane Smith</p>
                <RatingWithText/>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold">"Loved the spa and the dining options."</p>
                <p className="text-gray-600 mt-1">- Michael Lee</p>
                <RatingWithText/>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="overflow-hidden shadow-lg rounded-lg text-center">
                <img className="w-full h-40 object-cover" src="team 01.jpg" alt="Team Member" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
                  <p className="text-gray-600 mt-2">General Manager</p>
                </div>
              </div>
              <div className="overflow-hidden shadow-lg rounded-lg text-center">
                <img className="w-full h-40 object-cover" src="team 03.jpg" alt="Team Member" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
                  <p className="text-gray-600 mt-2">Head of Hospitality</p>
                </div>
              </div>
              <div className="overflow-hidden shadow-lg rounded-lg text-center">
                <img className="w-full h-40 object-cover" src="team 02.jpg" alt="Team Member" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">Michael Lee</h4>
                  <p className="text-gray-600 mt-2">Spa Manager</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
