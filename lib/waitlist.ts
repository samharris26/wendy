// Google Sheets waitlist submission via Apps Script
// Set NEXT_PUBLIC_SHEET_URL in your env to the deployed Apps Script web app URL

const sheetUrl = process.env.NEXT_PUBLIC_SHEET_URL;

export async function submitWaitlist({ name, email }: { name: string; email: string }) {
  if (!sheetUrl) {
    console.log("Waitlist signup (no Sheet URL configured):", { name, email });
    return { ok: true, dev: true };
  }

  // Apps Script returns a 302 redirect that browsers can't follow cross-origin.
  // Using no-cors mode means we can't read the response, but the data is still
  // written to the sheet. We treat a successful fetch (no network error) as success.
  await fetch(sheetUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ name, email }),
  });

  return { ok: true };
}
