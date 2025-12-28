// app/api/send/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json(); // Mengambil data (nama, email, pesan) dari form
  
  try {
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Pengirim (default resend)
      to: 'falihakbar14@gmail.com',                 // Email TUJUAN (email kamu)
      subject: 'Ada Pesan Baru di Web Portfolio!',
      html: `
        <h3>Pesan dari: ${body.name}</h3>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Isi Pesan:</strong></p>
        <p>${body.message}</p>
      ` // Di sini kamu bisa pakai HTML agar rapi
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}