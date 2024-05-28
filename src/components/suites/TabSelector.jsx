import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SitePanel from "./SitePanel";

export function SuiteSelectorTabs() {
  const data = [
    {
      label: "Deluxe suite",
      value: "Deluxe suite",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Presidential suite",
      value: "Presidential suite",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Palm suite",
      value: "Palm suite",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Sands Suite",
      value: "Sands Suite",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  const [activeTab, setActiveTab] = useState(data[0].label); // Set initial active tab to the label of the first data item

  return (
    <div>
      <div className="">
        <h1 className="text-5xl font-bold flex items-center justify-center" style={{ marginTop: '30px' }}>
          Z I O N
        </h1>
        <br />
      </div>

      <div className="h-screen flex items-center justify-center">
        <Tabs value={activeTab} className="w-[80rem] ">
          <div className="bg-white-900 text-white py-80 ">
            <TabsHeader
              className="bg-transparent"
              indicatorProps={{
                className: "bg-gray-900/10 shadow-none !text-white-900 width: 100%",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>

            <div className="text-center text-3xl font-bold">
              <TabsBody>
                {data.map(({ label }) => (
                  <TabPanel key={label} value={label}>
                    {label}
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
          </div>

          <div className="flex items-center gap-6 px-4 py-8">
            <div className="w-1/2 items-center gap-9 px-4 py-8 ">
              <SitePanel />
            </div>

            <div className="flex flex-col">
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    <div>
                      <p>{desc}</p>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" style={{ marginTop: '30px' }}>
                        Reserve now
                      </button>
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
          </div>
        </Tabs>
      </div>

      <div className="bg-white-900 text-white py-20 "></div>
      <br />

      <div className="text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-8 px-6 py-9">
          Amenities
        </h1>
        <p className="flex items-center justify-center gap-8 px-9 py-11">
          This four bedroomed suite features multiple indoor and outdoor living and entertainment spaces, 
          an eight seater dining table, state-of-the-art kitchen, three king sized beds, one queen sized bed,
          ample closet and storage space and en suites with rainshowers. The master bedroom comes with its 
          own writing desk, twin showers, a private balcony and floor to ceiling windows giving you amazing 
          views of the ocean.
        </p>
      </div>
      <div>
      <img
              src="room-feature.png"
              alt="Your image"
              className="rounded-lg mx-auto"
            />
      </div>
    </div>
  );
}
