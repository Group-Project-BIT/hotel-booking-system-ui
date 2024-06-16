import connectDb from "@/app/server/config/configDb";
import roomModel from "@/app/server/model/roomModel";
import roomType from "@/app/server/model/roomType";
export const POST = async (req) => {
  await connectDb();

  const { room_type_name, room_maintenance } = await req.json();

  try {
    const roomTypeDocument = await roomType.findOne({ type_name: room_type_name });
    if (!roomTypeDocument) {
      return new Response(JSON.stringify({ error: "Room type not found" }), {
        status: 404,
      });
    }
    const room = new roomModel({
      room_type: roomTypeDocument._id,
      room_maintenance,
    });
    
    await room.save();
    return new Response(JSON.stringify(room), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
