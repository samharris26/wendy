import { NextRequest, NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL;
const SHEET_URL = process.env.NEXT_PUBLIC_SHEET_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { name?: string; email?: string };
    const { name, email } = body;

    if (!email || !name) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
    }

    const results = await Promise.allSettled([
      // Save to email_subscribers via backend
      BACKEND_API_URL
        ? fetch(`${BACKEND_API_URL}/api/subscribe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, source: 'waitlist' }),
          })
        : Promise.resolve(null),

      // Also write to Google Sheet (existing behaviour)
      SHEET_URL
        ? fetch(SHEET_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ name, email }),
          })
        : Promise.resolve(null),
    ]);

    const backendResult = results[0];
    if (backendResult.status === 'rejected') {
      console.error('Backend subscribe failed:', backendResult.reason);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
