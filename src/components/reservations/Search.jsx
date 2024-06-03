"use client";
import React, { useState } from "react";
import DatePicker from "@/components/DatePicker";
import {
  Button,
  Select,
  Option
} from "@material-tailwind/react";

export const SearchContainer = ({ onSearch }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSearchClick = () => {
    onSearch(checkIn, checkOut, roomType);
  };

  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg">
      <div className="flex justify-center gap-1 ml-20">
        <div className="w-1/4 relative">
          <DatePicker label="Check In" value={checkIn} onChange={setCheckIn} />
        </div>
        <div className="w-1/4 relative">
          <DatePicker label="Check Out" value={checkOut} onChange={setCheckOut} />
        </div>
        <div className="w-1/4 relative">
          <div className="flex-auto w-72 absolute top-10 ml-20 mt-10">
            <Select label="Room Type" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              <Option value="single">Single</Option>
              <Option value="double">Double</Option>
              <Option value="suite">Suite</Option>
            </Select>
          </div>
        </div>
        <div className="w-1/4 relative">
          <Button className="absolute top-10 left-10 ml-10 mt-10 w-32" onClick={handleSearchClick} color="blue">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
