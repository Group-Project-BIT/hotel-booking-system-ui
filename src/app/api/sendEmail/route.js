import nodemailer from 'nodemailer';
import connectDb from "@/app/server/config/configDb";
import enquiryModel from '@/app/server/model/enquiryModel';
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
        from: email, // sender address
        to: process.env.COMPANY_EMAIL, // company email address
        subject: email,
        text: message,
        html: `<p>${message}</p>`,
      });

      const newEnquiry = new enquiryModel({
        email: email,
        message: message
      })
      await newEnquiry.save()

      return new Response(JSON.stringify({ success: true , enquiries: newEnquiry}), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 500,
      });
    }
  } 
