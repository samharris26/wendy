// Waitlist submission: saves to Supabase email_subscribers (via backend)
// and also to Google Sheets (legacy fallback, kept for safety).

const sheetUrl = process.env.NEXT_PUBLIC_SHEET_URL;

export async function submitWaitlist({ name, email }: { name: string; email: string }) {
  // Primary: route through our own API (saves to Supabase via backend)
  try {
    await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
  } catch (err) {
    console.error("Waitlist API error:", err);
  }

  // Legacy: also write to Google Sheet if configured
  if (sheetUrl) {
    try {
      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ name, email }),
      });
    } catch (_) {
      // non-critical
    }
  }

  return { ok: true };
}
