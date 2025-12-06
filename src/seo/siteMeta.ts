const rawSiteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined) ??
  "https://zenengineerings.com";

const baseSiteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteMeta = {
  name: "Zen Engineering Solutions",
  description:
    "Zen Engineering Solutions delivers premium HVAC, acoustic, thermal insulation, ceiling, and air cooler systems across Maharashtra with authorised Daikin, Anutone, and Symphony partnerships.",
  siteUrl: baseSiteUrl,
  locale: "en_IN",
  logo: "/zen-logo.png",
  defaultImage: "/zen-logo.png",
  sameAs: [
    "https://www.instagram.com/zen_engineerings/",
    "https://www.linkedin.com/company/zen-engineering-solutions/",
  ],
  contactPoints: [
    {
      telephone: "+91 89831 87087",
      contactType: "sales",
      areaServed: "IN-MH",
      availableLanguage: "en",
    },
    {
      telephone: "+91 90219 02201",
      contactType: "sales",
      areaServed: "IN-MH",
      availableLanguage: "en",
    },
    {
      telephone: "+91 96100 29008",
      contactType: "sales",
      areaServed: "IN-MH",
      availableLanguage: "en",
    },
  ],
  addresses: [
    {
      streetAddress:
        "Flat No. 001, Shree Ram Siddhi Apartment, 100 Feet Road, near Chetna Petrol Pump",
      addressLocality: "Sangli",
      addressRegion: "MH",
      postalCode: "416416",
      addressCountry: "IN",
    },
    {
      streetAddress:
        "SofX - Below Bank of Baroda, Ruikar Colony, E-Ward",
      addressLocality: "Kolhapur",
      addressRegion: "MH",
      postalCode: "416005",
      addressCountry: "IN",
    },
    {
      streetAddress:
        "Trimurti Bungalow, Unit No. 2, Plot No. 38, Gananjay Housing Society, Gandhi Bhavan Road, Kothrud",
      addressLocality: "Pune",
      addressRegion: "MH",
      postalCode: "411038",
      addressCountry: "IN",
    },
  ],
  email: "sales@zenengineerings.com",
};

export const buildAbsoluteUrl = (path?: string) => {
  if (!path) {
    return baseSiteUrl;
  }

  if (path.startsWith("http")) {
    return path;
  }

  const cleanPath = path.replace(/^\//, "");
  return cleanPath ? `${baseSiteUrl}/${cleanPath}` : baseSiteUrl;
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteMeta.name,
  url: siteMeta.siteUrl,
  logo: buildAbsoluteUrl(siteMeta.logo),
  sameAs: siteMeta.sameAs,
  email: siteMeta.email,
  contactPoint: siteMeta.contactPoints?.map((contact) => ({
    "@type": "ContactPoint",
    ...contact,
  })),
  address: siteMeta.addresses?.map((address) => ({
    "@type": "PostalAddress",
    ...address,
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteMeta.name,
  url: siteMeta.siteUrl,
  inLanguage: siteMeta.locale,
};
