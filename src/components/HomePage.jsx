import { Typography } from "@material-tailwind/react";
import React from "react";
import { StickyNavbar } from "./Navbar";
import Example from "./DatePicker";



const HomePage = () => {
  return (
    <div>
      <StickyNavbar />

      <header className="bg-blue-900 text-white py-40 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center">

          <div className="md:w-1/2"> {/* Changed order */}
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

          <div className="md:w-1/5 justify-self-flex-end "> {/* Changed order */}
            <img src='hotel-home.png' alt="Your image" className="rounded-lg shadow-md mx-auto" />
          </div>
        </div>


      </header>

      <Example/>
     


    </div>
  );
};

export default HomePage;


