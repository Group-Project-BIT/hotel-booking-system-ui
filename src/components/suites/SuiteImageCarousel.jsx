"use client"
import { Carousel } from "@material-tailwind/react";
 
export function SuiteImageCarousel() {
  return (
    <Carousel className="rounded-xl " style={{width:"500px"}} autoplay="true" loop>
      <img
        src="room-01.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="room-02.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="room-03.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}