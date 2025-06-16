// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // or use "smtp.ethereal.email" for testing
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your password or app password
    },
  });

  const mailOptions = {
    from: `"${data.name}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    subject: "New Contact Form Submission - Website",
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Company:</strong> ${data.addressLine1}</p>
      <p><strong>Looking for:</strong> ${data.addressLine2}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
