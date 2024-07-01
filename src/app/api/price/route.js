import connectDb from "@/app/server/config/configDb";
import reservation_price from "@/app/server/model/reservationPrice";
import reservation_Type from "@/app/server/model/reservationType";
import roomType from "@/app/server/model/roomType";

export const POST = async (req) => {
  await connectDb();
  const { reservation_type_name, type_name } = await req.json();
  try {
    const reservationTypeDoc = await reservation_Type.findOne({
      reservation_type_name: reservation_type_name,
    });
    if (!reservationTypeDoc) {
      return new Response(
        JSON.stringify({ error: "Invalid reservation type name" }),
        {
          status: 400,
        }
      );
    }
    const roomTypeDoc = await roomType.findOne({ type_name: type_name });
    if (!roomTypeDoc) {
      return new Response(JSON.stringify({ error: "Invalid room type name" }), {
        status: 400,
      });
    }
    console.log('Reservation Type ID:', reservationTypeDoc._id);
    console.log('Room Type ID:', roomTypeDoc._id);

    const reservationPriceDoc = await reservation_price.findOne({
      reservation_type_id: reservationTypeDoc._id,
      room_type_id: roomTypeDoc._id
    });
    // if (!reservationPriceDoc) {
    //   return new Response(
    //     JSON.stringify({
    //       error: "Price not found for the given reservation type and room type",
    //     }),
    //     {
    //       status: 404,
    //     }
    //   );
    // }
    
    return new Response(JSON.stringify({price: reservationPriceDoc.price}), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
