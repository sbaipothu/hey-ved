// Netlify function for sending reservation emails
import nodemailer from 'nodemailer';

export default async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
  const { name, contact, date, description } = JSON.parse(event.body || '{}');
  if (!name || !contact || !description) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' })
    };
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
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
}
