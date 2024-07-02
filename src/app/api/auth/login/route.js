import connectDb from "@/app/server/config/configDb";
import userModel from "@/app/server/model/userModel";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  await connectDb();

  const { email, password } = await req.json();

  const admin = await userModel.findOne({ email });

  if (!admin) {
    return new Response(JSON.stringify({ message: 'Invalid email. Try again!' }), {
        status: 401,
      });
  }

  const isPasswordCorrect = await bcrypt.compare(password, admin.password);

  if (!isPasswordCorrect) {
    return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
      });
  }

  // If credentials are correct, store a flag in local storage
  return new Response(JSON.stringify({ message: 'Login successful', isAdmin: true }), {
    status: 200,
  });

}