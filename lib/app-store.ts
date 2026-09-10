export const APP_STORE_BASE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752";

// App Store Connect provider token (App Analytics → Sources → "Generate a
// Campaign Link" → the pt= value). With it set, each link carries a campaign
// (ct) so installs show up per placement under Sources → Campaigns. Without
// it Apple ignores ct, so the links still work but aren't attributed.
const PROVIDER_TOKEN = "";

/** App Store URL tagged with a campaign name (Apple caps ct at 40 chars). */
export function appStoreUrl(placement: string): string {
  const params = new URLSearchParams({ itscg: "30200", itsct: "apps_box_link" });
  if (PROVIDER_TOKEN) {
    params.set("pt", PROVIDER_TOKEN);
    params.set("ct", `web-${placement}`.slice(0, 40));
    params.set("mt", "8");
  }
  return `${APP_STORE_BASE_URL}?${params}`;
}
