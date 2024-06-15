import connectDb from "@/app/server/config/configDb";
import reservationModel from "@/app/server/model/reservationModel";

export const GET = async () => {
  await connectDb();

  try {
    const reservations = await reservationModel.find();
    return new Response(JSON.stringify(reservations), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
