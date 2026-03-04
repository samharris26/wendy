// Google Sheets waitlist submission via Apps Script
// Set NEXT_PUBLIC_SHEET_URL in your env to the deployed Apps Script web app URL

const sheetUrl = process.env.NEXT_PUBLIC_SHEET_URL;

export async function submitWaitlist({ name, email }: { name: string; email: string }) {
  if (!sheetUrl) {
    console.log("Waitlist signup (no Sheet URL configured):", { name, email });
    return { ok: true, dev: true };
  }

  const res = await fetch(sheetUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ name, email }),
  });

  if (!res.ok) throw new Error("Network error");

  const data = await res.json();
  if (data.result !== "success") throw new Error(data.error || "Unknown error");

  return { ok: true };
}
