import nodemailer from "nodemailer";
import connectDb from "@/app/server/config/configDb";
export const POST = async (req) => {
  await connectDb();
  const { email, message, username } = await req.json();

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail", // e.g., Gmail
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
      subject: `Thank you for informing us.${username}`,
      text: message,
      html: `<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f6f6f6;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 20px;
            background-color: #4CAF50;
            color: white;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .footer {
            text-align: center;
            color: #777777;
            font-size: 12px;
            margin-top: 20px;
        }
        .hotel-sign {
            font-size: 24px;
            font-weight: bold;
            color: #4CAF50;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="hotel-sign">Hotel Zion</div>
        </div>
        <div class="content">
            <p>Dear ${username},</p>
            <p>Thank you for informing us.</p>
            <p>${message}</p>
            <p>Best Regards,<br>Hotel Zion Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Hotel Zion. All rights reserved.</p>
        </div>
    </div>
</body>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 200,
      }
    );
  }
};
