import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

export default async function POST(request) {
  console.log('dealing with request');
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    console.log('Message sent:', mail.messageId);
    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
  }
}
