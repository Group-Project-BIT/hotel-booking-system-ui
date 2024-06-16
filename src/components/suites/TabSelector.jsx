import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SitePanel from "./SitePanel";
import { MasonryGridGallery } from "./Gallery";
import { useRouter } from "next/navigation";

export function SuiteSelectorTabs() {
  const router = useRouter();
  const data = [
    {
      label: "Deluxe suite",
      value: "Deluxe suite",
      desc: `This deluxe room offers extra space, upscale furnishings, a larger bed, 
      premium amenities, and enhanced comfort compared to standard rooms. 
      Perfect for relaxation and unwinding after a long day of exploring.`,
    },
    {
      label: "Standard suite",
      value: "Standard suite",
      desc: `This standard room is a basic hotel accommodation with essential amenities, including a 
      bed, bathroom, desk, and basic furnishings, designed for a comfortable stay at a budget-friendly price.
       This standard room is a basic hotel accommodation with essential amenities,`,
    },
    {
      label: "Presidential suite",
      value: "Presidential suite",
      desc: `The pinnacle of luxury accommodation, the Presidential Suite provides unparalleled spaciousness, featuring a separate living room, 
      a grand bedroom with an opulent king-sized bed, 
      and a spa-like bathroom. Exquisite furnishings, state-of-the-art technology, and personalized butler service create an unforgettable experience. `,
    },
    {
      label: "Executive suite",
      value: "Executive suite",
      desc: `An executive room offers additional space, upgraded furnishings, a larger work area, and enhanced amenities, 
      often including access to exclusive hotel services or lounges, 
      ideal for business travelers seeking a productive and comfortable work environment`,
    },
  ];

  const [activeTab, setActiveTab] = useState(data[0].label); // Set initial active tab to the label of the first data item

  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('hotel res.jpg')" }}>
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to ZION Hotels Suites</h1>
          <p className="text-xl mb-6">Experience unparalleled comfort and elegance in our premium accommodations.</p>

        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src="hotel pool.jpg" alt="Feature 1" className="rounded-lg mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold mb-2">Pool</h3>
              <p className="text-lg">Inviting pool for refreshing dips and ultimate relaxation,Sparkling pool beckons for cool swims and blissful lounging.</p>
            </div>
            <div>
              <img src="gym 02.jpg" alt="Feature 2" className="rounded-lg mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold mb-2">Gym & Spa</h3>
              <p className="text-lg">Access top-notch amenities, including a spa, gym, and gourmet dining.</p>
            </div>
            <div>
              <img src="loactions.jpg" alt="Feature 3" className="rounded-lg mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold mb-2">Prime Locations</h3>
              <p className="text-lg">Stay in the heart of the city with stunning views and convenient access to attractions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Suite Selector Tabs */}
      <div className="h-screen flex flex-col items-center justify-center">
        <Tabs value={activeTab} className="w-full max-w-6xl px-4">
          <TabsHeader
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-t-lg shadow-lg"
            indicatorProps={{
              className: "bg-white shadow-none text-white rounded-t-lg",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`text-lg px-6 py-3 ${activeTab === value ? 'text-2xl font-bold' : ''}`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody className="bg-white rounded-b-lg shadow-lg p-8">
            {data.map(({ label, desc }) => (
              <TabPanel key={label} value={label} className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="w-full md:w-1/2">
                  <SitePanel />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl font-bold mb-4">{label}</h2>
                  <p className="text-lg mb-4">{desc}</p>
                  <button onClick={() => router.push("./reservations")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Reserve now
                  </button>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      {/* Amenities Section */}
      <div className="text-center py-20 bg-white">
        <h1 className="text-4xl font-bold mb-8">Amenities</h1>
        <p className="text-lg max-w-4xl mx-auto mb-12">
          This four-bedroom suite features multiple indoor and outdoor living and entertainment spaces,
          an eight-seater dining table, state-of-the-art kitchen, three king-sized beds, one queen-sized bed,
          ample closet and storage space, and en suites with rain showers. The master bedroom comes with its
          own writing desk, twin showers, a private balcony, and floor-to-ceiling windows giving you amazing
          views of the ocean.
        </p>
        <img
          src="room-feature.png"
          alt="Your image"
          className="rounded-lg mx-auto mb-12 shadow-lg"
        />
        <div className="max-w-6xl mx-auto">
          <MasonryGridGallery />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-500 text-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8">Experience the best in luxury and comfort. Reserve your suite today!</p>
          <button onClick={() => router.push("./reservations")} className="bg-white text-blue-500 font-bold py-3 px-6 rounded hover:bg-gray-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
