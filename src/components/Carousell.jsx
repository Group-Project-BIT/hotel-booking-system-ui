import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function CarouselWithContent() {
  const router = useRouter()
  return (
    <div className="flex flex-wrap bg-gray-200  ">
      <div className="w-1/2 items-center gap-6 px-4 py-8 ">
      <Carousel className="rounded-xl">
        <div className="relative h-full w-full">
          <img
            src="room-01.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Discover Your Dream Hotel.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Immerse yourself in a world beyond the everyday. Find your perfect escape from the routine, 
                whether it's a bustling city stay, a serene beach getaway, or an adventurous mountain escape.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white" onClick={()=>router.push("/suites")}>
                  Explore
                </Button>
                {/* <Button size="lg" color="white" variant="text">
                  Gallery
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="room-02.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Your Perfect Hotel Awaits.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Unwind and rediscover yourself in a haven of comfort and convenience. 
                Our hotels offer the perfect escape to relax and rejuvenate. 
                From luxurious rooms to exceptional amenities, we cater to your every need. Find your perfect hideaway. 
                
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white" onClick={()=>router.push("/suites")}>
                  Explore
                </Button>
                {/* <Button size="lg" color="white" variant="text">
                  Gallery
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="room-03.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Book Your Hotel Adventure.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                The world is your oyster. Let us help you discover it. Find your ideal base camp for exploring new destinations. 
                Our hotels are strategically located to put you at the heart of the action.  
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white" onClick={()=>router.push("/suites")}>
                  Explore
                </Button>
                {/* <Button size="lg" color="white" variant="text">
                  Gallery
                </Button> */}
              </div>
            </div>
          </div>
          
        </div>
      </Carousel>
      </div>
      <div className="w-1/2 px-4 py-8 flex flex-col items-center justify-center">
        <div className=" p-6 rounded-xl ">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Zion Hotels
          </h2>
          <p className="text-sm leading-relaxed">
          Zion is more than just a hotel booking system; we're your trusted travel companion. We believe that every journey is an opportunity to explore, 
          unwind, and create lasting memories. That's why we've curated a diverse selection of hotels across the globe, catering to every traveler's desire.
          </p>
          <p className="text-sm leading-relaxed mt-4">
          We're constantly innovating to make your travel experience even better. Our user-friendly platform is constantly evolving, 
          offering new features like personalized recommendations, exclusive deals, and mobile booking options for ultimate convenience. 
          We're committed to staying at the forefront of travel technology to ensure a smooth and enjoyable journey from start to finish.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            
          </p>
        </div>
      </div>
    </div>
  );
}
