import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
      host: "smtp.gmail.com",
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
    subject: `CONTACT Message: ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Contact message sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Contact message sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}