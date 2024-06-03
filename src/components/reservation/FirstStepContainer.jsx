import React from 'react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

const FirstStepContainer = () => {
  

  return (
    <div>
      <section className="m-10">
        <div className="p-10 rounded-l-xl border border-blue-gray-100 bg-[url('/image/gradient-bg-1.png')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold mb-2"
            >
              Upcoming Events
            </Typography>
            <Typography variant="h3" color="blue-gray">
              Tech Summit: Shaping Tomorrow
            </Typography>
            <Typography
              className="mt-2 mb-6 !text-base font-normal text-gray-500"
            >
              Prepare to be part of dynamic conversations that will redefine the
              boundaries.
            </Typography>
            <Popover>
              <PopoverHandler>
                <Button>More Info</Button>
              </PopoverHandler>
              <PopoverContent className="z-[999] grid w-[28rem] grid-cols-2 overflow-hidden p-0">
                <div className="p-4">
                  <Typography color="blue-gray" className="mb-2 text-lg font-bold">
                    Material Tailwind
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mb-14 font-normal text-blue-gray-500"
                  >
                    Material Tailwind is an easy to use components library for Tailwind
                    CSS and Material Design. It features multiple React and HTML
                    components, all written with Tailwind CSS classes and Material
                    Design guidelines.
                  </Typography>
                  <a href="#" className="-ml-3 inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-x-2 capitalize"
                    >
                      Read More
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                          stroke="#212121"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </a>
                </div>
        
                <div className="min-h-full !w-full p-3">
                  <img
                    src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="image"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </PopoverContent>
            </Popover>
      </div>
    </section>
    </div>
  );
};

export default FirstStepContainer;