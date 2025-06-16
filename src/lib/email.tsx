const nodemailer = require("nodemailer");

// Create a transporter for SMTP
export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
