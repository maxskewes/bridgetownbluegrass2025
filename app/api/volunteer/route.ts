import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, email, phone, shirt, message } = await request.json();

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
    subject: `VOLUNTEER message: ${name} from ${email}`,
    html: `<div className='flex flex-col justify-center items-center bg-blue-200 text-white p-8 m-4'>
  <div className='text-xl'>${name}</div>
  <div className='text-md'>${email}</div>
  <div className='text-sm'>${message}</div>
  <div className='text2xl'>Take that lads!!!</div>
</div>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Volunteer message sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Volunteer message sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
