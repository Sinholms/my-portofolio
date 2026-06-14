import { Resend } from 'resend'

const MAX_BODY_BYTES = 12_000
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5_000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000
const RATE_LIMIT_MAX_REQUESTS = 5
const MAX_RATE_LIMIT_ENTRIES = 1_000

type RateLimitEntry = {
  count: number
  resetAt: number
}

const globalRateLimit = globalThis as typeof globalThis & {
  contactRateLimit?: Map<string, RateLimitEntry>
}
const contactRateLimit = globalRateLimit.contactRateLimit ?? new Map<string, RateLimitEntry>()
globalRateLimit.contactRateLimit = contactRateLimit

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

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  return forwardedFor?.split(',')[0]?.trim() || req.headers.get('x-real-ip')?.trim() || null
}

function checkRateLimit(ip: string | null) {
  if (!ip) {
    return { allowed: true, retryAfter: 0 }
  }

  const now = Date.now()
  const current = contactRateLimit.get(ip)

  if (!current || current.resetAt <= now) {
    if (contactRateLimit.size >= MAX_RATE_LIMIT_ENTRIES) {
      for (const [key, entry] of contactRateLimit) {
        if (entry.resetAt <= now) {
          contactRateLimit.delete(key)
        }
      }

      if (contactRateLimit.size >= MAX_RATE_LIMIT_ENTRIES) {
        const oldestKey = contactRateLimit.keys().next().value
        if (oldestKey) {
          contactRateLimit.delete(oldestKey)
        }
      }
    }

    contactRateLimit.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return { allowed: true, retryAfter: 0 }
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1_000)),
    }
  }

  current.count += 1
  return { allowed: true, retryAfter: 0 }
}

function isSameOrigin(req: Request) {
  const origin = req.headers.get('origin')
  if (!origin) {
    return true
  }

  try {
    return new URL(origin).origin === new URL(req.url).origin
  } catch {
    return false
  }
}

function isValidEmail(email: string) {
  return email.length <= MAX_EMAIL_LENGTH
    && !/[\r\n]/.test(email)
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return Response.json({ success: false, error: 'Request origin is not allowed.' }, { status: 403 })
  }

  const rateLimit = checkRateLimit(getClientIp(req))
  if (!rateLimit.allowed) {
    return Response.json(
      { success: false, error: 'Too many messages. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(rateLimit.retryAfter) },
      },
    )
  }

  if (!req.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return Response.json({ success: false, error: 'Content-Type must be application/json.' }, { status: 415 })
  }

  const contentLength = Number(req.headers.get('content-length'))
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return Response.json({ success: false, error: 'Message payload is too large.' }, { status: 413 })
  }

  let body: unknown
  try {
    const rawBody = await req.text()
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return Response.json({ success: false, error: 'Message payload is too large.' }, { status: 413 })
    }
    body = JSON.parse(rawBody)
  } catch {
    return Response.json({ success: false, error: 'Invalid JSON payload.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return Response.json({ success: false, error: 'Invalid message payload.' }, { status: 400 })
  }

  const fields = body as Partial<Record<'name' | 'email' | 'message' | 'website', unknown>>
  if (typeof fields.website === 'string' && fields.website.trim()) {
    return Response.json({ success: true })
  }

  if (
    typeof fields.name !== 'string'
    || typeof fields.email !== 'string'
    || typeof fields.message !== 'string'
  ) {
    return Response.json({ success: false, error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const name = fields.name.trim()
  const email = fields.email.trim()
  const message = fields.message.trim()

  if (!name || !email || !message) {
    return Response.json({ success: false, error: 'Name, email, and message are required.' }, { status: 400 })
  }

  if (name.length > MAX_NAME_LENGTH || /[\r\n]/.test(name)) {
    return Response.json({ success: false, error: 'Name must be 100 characters or fewer.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return Response.json({ success: false, error: 'Enter a valid email address.' }, { status: 400 })
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return Response.json({ success: false, error: 'Message must be 5,000 characters or fewer.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ success: false, error: 'Email service is not configured.' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    const { data, error } = await resend.emails.send({
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

    if (error || !data) {
      console.error('Resend rejected contact email', {
        name: error?.name,
        statusCode: error?.statusCode,
      })
      return Response.json({ success: false, error: 'Failed to send message.' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact email request failed', error)
    return Response.json({ success: false, error: 'Failed to send message.' }, { status: 500 })
  }
}
