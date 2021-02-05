"use strict";
import nodemailer from "nodemailer";

const sendEmail = async (
  email: string,
  name: string,
  company: string,
  message: string
) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const recipients = process.env.MAIL_RECIPIENTS;

  let info = await transporter.sendMail({
    from: '"Hello Moio" <contact@hellomoio.com>',
    to: recipients,
    subject: "Moio: Project request",
    text: `
      Project request\n
      Email: ${email}\n
      Name: ${name}\n
      Company: ${company}\n
      Message: ${message}\n
    `,
    html: `
      <h1>Project request</h1>
      <br>
      <p>Email : ${email}</p>
      <br>
      <p>Name : ${name}</p>
      <br>
      <p>Company : ${company}</p>
      <br>
      <p>Message :</p>
      <p>${message}</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);

  await transporter.sendMail({
    from: '"Hello Moio" <contact@hellomoio.com>',
    to: email,
    subject: "Moio: Request received",
    text: `We received your request. We will get back to you shortly.`,
    html: `<p>We received your request. We will get back to you shortly.</p>`,
  });
};

export default async (req, res) => {
  try {
    const { email, name, company, message } = req.body;
    await sendEmail(email, name, company, message);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
