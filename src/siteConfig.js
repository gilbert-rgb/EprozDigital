// ─────────────────────────────────────────────────────────────
// Edit your business details HERE — they update the whole site.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: "EProz Digital",
  tagline: "Creative Boutique",
  url: "https://eprozdigital.netlify.app", // change to your own domain once you have it
  // The site had TWO different numbers — confirm which is correct and delete the other.
  phones: [
    { display: "0704 286 251", intl: "254704286251" },
    { display: "0743 143 013", intl: "254743143013" },
  ],
  whatsapp: "254704286251", // number that receives quote requests
  email: "info@eprozdigital.co.ke",
  address: "Ruiru Bypass, Ruiru, Kiambu County, Kenya",
  mapQuery: "Ruiru Bypass, Ruiru, Kenya",
  // Add real opening hours, e.g. "Mon – Sat: 8:00 AM – 7:00 PM". Leave "" to hide.
  hours: "",
  // Add your real links. Leave "" to hide the icon.
  social: { facebook: "", instagram: "", tiktok: "" },
  developer: { name: "Gilbert Cheboi", url: "https://chebsonporfolio.netlify.app" },
};

export const waLink = (text = "") =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
