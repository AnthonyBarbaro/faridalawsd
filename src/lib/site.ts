export const site = {
  name: "Farida Law San Diego",
  legalName: "Farida Law",
  tagline: "Trusted Counsel. Strong Advocacy.",
  description:
    "Farida Law SD provides clear, professional legal guidance with a client-first approach. Request a consultation or submit your details through our secure intake form.",

  // IMPORTANT: Update this if your final domain differs
  url: "https://faridalawsd.com",
  ogImage: "/og.svg",

  contact: {
    phoneDisplay: "(619) 599-5129",
    phoneE164: "+16195995129",
    email: "Crystal@faridalawsd.com",
    address: {
      streetAddress: "343 E Main St",
      addressLocality: "El Cajon",
      addressRegion: "CA",
      postalCode: "92020",
      addressCountry: "US",
    },
  },

  // Optional: paste Calendly link here (leave empty to hide scheduling buttons)
  calendlyUrl: "",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Practice Areas", href: "/practice-areas/" },
    { label: "Reviews", href: "/reviews/" },
    { label: "Consultation", href: "/consultation-request/" },
    { label: "Client Intake", href: "/client-intake/" },
  ],

  // NOTE: These are placeholders. Update to match Farida's real services before launch.
  practiceAreas: [
    {
      slug: "immigration",
      title: "Immigration",
      description: "Support through complex processes with careful preparation and clear next steps.",
    },
    {
      slug: "family-law",
      title: "Family Law",
      description: "Steady guidance for sensitive matters, with respect and professionalism.",
    },
    {
      slug: "estate-planning",
      title: "Estate Planning",
      description: "Thoughtful planning to protect your family, assets, and intentions.",
    },
    {
      slug: "business-contracts",
      title: "Business & Contracts",
      description: "Practical counsel for agreements, disputes, and risk management.",
    },
  ],

  testimonials: [
    {
      name: "Verified Client",
      quote: "Professional, responsive, and clear about next steps. I felt supported throughout.",
    },
    {
      name: "Verified Client",
      quote: "Strong communication and meticulous attention to detail. Excellent experience.",
    },
    {
      name: "Verified Client",
      quote: "A calm advocate with a thoughtful strategy. Very professional from start to finish.",
    },
  ],
} as const;
