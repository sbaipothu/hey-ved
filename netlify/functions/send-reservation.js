// Netlify function for sending reservation emails
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, contact, date, description } = req.body;
  if (!name || !contact || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info.heyved@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD // Use Netlify environment variable
      }
    });
    const mailOptions = {
      from: 'info.heyved@gmail.com',
      to: 'info.heyved@gmail.com',
      subject: 'New Reservation Request',
      text: `Name: ${name}\nContact: ${contact}\nEvent Date: ${date || 'Not Provided'}\nDescription: ${description}`
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};
