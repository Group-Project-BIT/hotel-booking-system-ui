import connectDb from "@/app/server/config/configDb";
import enquiryModel from "@/app/server/model/enquiryModel";


export const GET = async () => {
  await connectDb();

  try {
    const enquiries = await enquiryModel.find();
    return new Response(JSON.stringify(enquiries), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};