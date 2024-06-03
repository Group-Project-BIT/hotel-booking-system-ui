"use client";
import React, { useState } from 'react';
import { StickyNavbar } from "@/components/Navbar";
import ReservationContainer from '@/components/reservations/ReservationContainer';
import RoomTypeCardsContainer from '@/components/reservations/RoomTypeCardsContainer';

const ReservationsPage = () => {
  const [selectedRoomType, setSelectedRoomType] = useState(null);

  return (
    <div>
      <div>
        <StickyNavbar />
      </div>
      {!selectedRoomType ? (
        <RoomTypeCardsContainer onSelectRoomType={setSelectedRoomType} />
      ) : (
        <div className='flex flex-auto justify-center'>
          <ReservationContainer selectedRoomType={selectedRoomType} />
        </div>
      )}
    </div>
  );
}

export default ReservationsPage;
