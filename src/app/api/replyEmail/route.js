import nodemailer from 'nodemailer';
import connectDb from "@/app/server/config/configDb";
export const POST = async (req) => {
    await connectDb()
    const { email, message } = await req.json();

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., Gmail
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.COMPANY_EMAIL, // sender address
        to: email, // company email address
        subject: `Thank you for informing us.${email}`,
        text: message,
        html: `<p>${message}</p>`,
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 200,
      });
    }
  } 
