import { site } from "@/lib/site";

export function getLegalServiceJsonLd() {
  const a = site.contact.address;

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.legalName,
    url: site.url,
    description: site.description,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.streetAddress,
      addressLocality: a.addressLocality,
      addressRegion: a.addressRegion,
      postalCode: a.postalCode,
      addressCountry: a.addressCountry,
    },
    areaServed: [
      { "@type": "City", name: a.addressLocality },
      { "@type": "AdministrativeArea", name: "San Diego County" },
      { "@type": "State", name: a.addressRegion },
    ],
    image: [`${site.url}${site.ogImage}`],
  };
}
