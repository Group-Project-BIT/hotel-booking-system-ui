import connectDb from "@/app/server/config/configDb";
import guestModel from "@/app/server/model/guestModel";

export const GET = async () => {
  await connectDb();

  try {
    const guest = await guestModel.find();
    return new Response(JSON.stringify(guest), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};