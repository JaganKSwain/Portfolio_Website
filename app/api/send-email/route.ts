import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Prepare email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #06b6d4;">New Contact Form Submission — Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
        <p><strong>Message:</strong></p>
        <p style="background: #f8fafc; padding: 12px; border-radius: 8px;">${message.replace(/\n/g, '<br>')}</p>
      </div>
    `

    // Send email to primary address
    const recipient = process.env.CONTACT_EMAIL || 'jagan.swain.ece.2024@nist.edu'
    const result = await sendEmail({
      to: recipient,
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
    })

    if (result.success) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to send email' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error in send-email API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
