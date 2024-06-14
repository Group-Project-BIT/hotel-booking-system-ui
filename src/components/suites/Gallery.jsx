import React from "react";
export function MasonryGridGallery() {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="Deluxe Room .jpg"
              alt="gallery-photo1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="Double room.jpg"
              alt="gallery-photo2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="Luxury room.jpg"
              alt="gallery-photo3"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="gallery 03.jpg"
              alt="gallery-photo4"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="Premium room.jpg"
              alt="gallery-photo5"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="room-01.jpg"
              alt="gallery-photo6"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="room-02.jpg"
              alt="gallery-photo7"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="room-03.jpg"
              alt="gallery-photo8"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="Luxury room.jpg"
              alt="gallery-photo9"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="gallery 01.jpg"
              alt="gallery-photo10"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="gallery 02.jpg"
              alt="gallery-photo11"
            />
          </div>
        </div>
      </div>
    );
  }