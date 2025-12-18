import { payload } from '@/lib/payload'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    await payload.create({
      collection: 'contact-submissions',
      data: {
        name: body.name,
        email: body.email,
        company: body.company,
        message: body.message,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
