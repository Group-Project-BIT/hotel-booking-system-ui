import connectDb from "@/app/server/config/configDb";
import roomType from "@/app/server/model/roomType";
import roomModel from "@/app/server/model/roomModel";

export const GET = async () => {
  await connectDb();
  try {
    const rooms = await roomModel.find();
    
    const createdRoomsCount = rooms.length

    return new Response(JSON.stringify({rooms: rooms, createdRoomsCount: createdRoomsCount}), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};