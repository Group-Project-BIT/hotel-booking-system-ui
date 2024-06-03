"use client";
import React, { Children } from "react";
import RoomTypeCard from '@/components/reservations/RoomTypeCard';

const RoomTypeCardsContainer = ({ onSelectRoomType }) => {
    const roomTypes = [
        {
            type_name: "Deluxe Room",
            desc: "A luxurious room with a beautiful sea view.",
            adults_count: "4",
            children_count: "2",
            price: ["$200 per night", "$180 for members"]
        },
        {
            type_name: "Executive Room",
            desc: "A comfortable room with all the basic amenities.",
            adults_count: "3",
            children_count: "2",
            price: ["$100 per night", "$90 for members"]
        },
        {
            type_name: "Standard Room",
            desc: "A comfortable room with all the basic amenities.",
            adults_count: "2",
            children_count: "1",
            price: ["$100 per night", "$90 for members"]
        }
    ];

    return (
        <div className="flex flex-auto justify-center">
            {roomTypes.map((room_type, index) => (
                <RoomTypeCard
                    key={index}
                    type_name={room_type.type_name}
                    desc={room_type.desc}
                    adults_count={room_type.adults_count}
                    children_count={room_type.children_count}
                    price={room_type.price}
                    onSelectRoomType={onSelectRoomType}
                />
            ))}
        </div>
    );
};

export default RoomTypeCardsContainer;
