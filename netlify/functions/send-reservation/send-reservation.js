// Netlify function for sending reservation emails
import nodemailer from 'nodemailer';

export default async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  const { name, contact, date, description } = JSON.parse(event.body || '{}');
  if (!name || !contact || !description) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info.heyved@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
    const mailOptions = {
      from: 'info.heyved@gmail.com',
      to: 'info.heyved@gmail.com',
      subject: 'New Reservation Request',
      text: `Name: ${name}\nContact: ${contact}\nEvent Date: ${date || 'Not Provided'}\nDescription: ${description}`
    };
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
