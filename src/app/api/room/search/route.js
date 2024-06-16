import connectDb from "@/app/server/config/configDb";
import roomModel from "@/app/server/model/roomModel";
import reservationModel from "@/app/server/model/reservationModel";

// export const POST = async (req) => {
//     await connectDb();
  
//       const { check_in, check_out, room_type } = await req.json();
  
//       try {
//         // Query to find all available rooms within the given date range and room type
//         const availableRoomTypes = await roomModel.find({
//           room_type: room_type,
//           room_maintenance: false,
//           // Assuming check_in and check_out are stored in ISO format and availability is a boolean
//           $or: [
//             { check_out: { $lt: new Date(check_in) } },
//             { check_in: { $gt: new Date(check_out) } },
//           ],
//         }).distinct('type'); // Get distinct room types
//         return new Response(JSON.stringify(availableRoomTypes), {
//           status: 200,
//         });
//       } catch (err) {
//         return new Response(JSON.stringify({ error: err.message }), {
//           status: 500,
//         });
//       }
//     } 





export const POST = async (req) => {
  await connectDb()
    const { room_type_name, checkin, checkout } = await req.json();
  try {
    

    const checkInDate = new Date(checkin);
    const checkOutDate = new Date(checkout);

    // Validate input dates
    if (checkInDate >= checkOutDate) {
      return new Response(JSON.stringify({ error: "Check-in date must be before check-out date" }), {
        status: 400,
      });
    }

    // Find all rooms of the given type
    const roomsOfType = await roomModel.find({ room_type_name });

    // Find all reservations that overlap with the given dates
    const overlappingReservations = await reservationModel.find({
      room_id: { $in: roomsOfType.map(room => room._id) },
      $or: [
        { check_in: { $lt: checkOutDate, $gte: checkInDate } },
        { check_out: { $gt: checkInDate, $lte: checkOutDate } },
        { check_in: { $lte: checkInDate }, check_out: { $gte: checkOutDate } },
      ],
    });

    const reservedRoomIds = overlappingReservations.map(reservation => reservation.room_id.toString());

    // Filter out reserved rooms
    const availableRooms = roomsOfType.filter(room => !reservedRoomIds.includes(room._id.toString()));

    if (availableRooms.length > 0) {
      return new Response(JSON.stringify({ message: "Room is available", available: true }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ message: "No rooms available for the selected dates", available: false }), {
        status: 200,
      });
    }
  } catch (error) {
    console.error("Error checking room availability:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
  