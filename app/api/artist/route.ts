import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, hometown, bio, website, email, phone, video, social, message } =
    await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_ADD,
      pass: process.env.NEXT_PUBLIC_NM_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_EMAIL_ADD,
    to: process.env.NEXT_PUBLIC_EMAIL_ADD,
    subject: `Artist Application from ${name}`,
    text: `${name}, ${hometown}; sent from ${email}: ${message}; url:${website}, phone: ${phone}, "${bio}"; video: ${video}, social: ${social}`
  }
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Artist application sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Artist application sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
