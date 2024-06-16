import connectDb from "@/app/server/config/configDb";
import reservationModel from "@/app/server/model/reservationModel";
import reservation_Type from "@/app/server/model/reservationType";

export const GET = async () => {
  await connectDb();

  try {
    const reservations = await reservationModel.find().populate("guest_id");
    return new Response(JSON.stringify(reservations), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
