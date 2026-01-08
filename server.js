// Minimal Express server to handle reservation email
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/api/send-reservation', async (req, res) => {
  const { name, contact, date, description } = req.body;
  if (!name || !contact || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    // Configure your SMTP transport here
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info.heyved@gmail.com',
        pass: 'YOUR_APP_PASSWORD' // Use an app password, not your real password
      }
    });
    const mailOptions = {
      from: 'info.heyved@gmail.com',
      to: 'info.heyved@gmail.com',
      subject: 'New Reservation Request',
      text: `Name: ${name}\nContact: ${contact}\nEvent Date: ${date || 'Not Provided'}\nDescription: ${description}`
    };
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
