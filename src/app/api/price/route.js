import connectDb from "@/app/server/config/configDb";
import reservation_price from "@/app/server/model/reservationPrice";

export const POST = async (req) => {
  await connectDb();
const {reservation_type_id, room_type_id} = await req.json();
  try {
    const reservationPrice = await reservation_price.findOne({
        reservation_type_id: reservation_type_id,
        room_type_id: room_type_id
    });
    return new Response(JSON.stringify(reservationPrice), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};