import connectDb from "@/app/server/config/configDb";
import userModel from "@/app/server/model/userModel";



export const GET = async () => {
  await connectDb();

  try {
    const users = await userModel.find({role: "receptionist"});
    return new Response(JSON.stringify(users), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};