import connectDb from "@/app/server/config/configDb";
import roomType from "@/app/server/model/roomType";
import roomModel from "@/app/server/model/roomModel";

export const GET = async () => {
  await connectDb();
  try {
    const roomTypes = await roomType.find();
    const luxuryType = await roomType.find({
      type_name: "Luxury"
    })
    const createdRooms = await roomModel.find({
      room_type: luxuryType._id,
      room_maintenance: false
    });
    const createdRoomsCount = createdRooms.length

    return new Response(JSON.stringify({roomTypes: roomTypes, createdRoomsCount: createdRoomsCount}), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
