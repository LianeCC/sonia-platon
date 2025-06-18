// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const today = new Date();
const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
const randomSuffix = Math.floor(100 + Math.random() * 900);
const filename = `demande${formattedDate}-${randomSuffix}.pdf`;


export async function POST(req: Request) {
  const body = await req.json();

  const { pdfBase64, userEmail } = body;

  try {
    const data = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: ['liane.coupat@gmail.com', userEmail],
      subject: 'Nouvelle demande de saddle fitting',
      html: `<p>Vous trouverez ci-joint la demande de rendez-vous.</p>`,
      attachments: [
        {
          filename: filename,
          content: pdfBase64,
        },
      ],
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur envoi email :', error);
    return NextResponse.json({ success: false, error });
  }
}
