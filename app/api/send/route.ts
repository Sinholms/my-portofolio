import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string) {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }

  return value.replace(/[&<>"']/g, (char) => map[char])
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<Record<'name' | 'email' | 'message', string>>
  const name = body.name?.trim() || ''
  const email = body.email?.trim() || ''
  const message = body.message?.trim() || ''

  if (!name || !email || !message) {
    return Response.json({ success: false, error: 'Name, email, and message are required.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ success: false, error: 'Email service is not configured.' }, { status: 500 })
  }

  try {
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'falihakbar14@gmail.com',
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    return Response.json({ success: true, data })
  } catch {
    return Response.json({ success: false, error: 'Failed to send message.' }, { status: 500 })
  }
}
