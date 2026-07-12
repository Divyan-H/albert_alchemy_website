// Central schema.org (JSON-LD) builders for Albert Digital Alchemy.
// Kept separate from content.js so the page-level "what copy shows on screen"
// data stays clean and this file only produces structured data objects.
//
// NOTE ON WHY THIS FILE EXISTS / HOW IT'S USED:
// The site uses react-router's BrowserRouter, so every page has a real,
// clean, crawlable URL (e.g. https://SITE/about) — no "/#/about" hash
// fragments. The server (see /public/.htaccess) rewrites any unknown path
// to index.html so these URLs work on direct visits and refreshes, and
// react-router then renders the matching page.
//
// Organization + WebSite schema is injected once, statically, in index.html
// (see that file) so it's present even before React runs.
// Everything else here is injected per-route by <SEO /> (src/components/SEO.jsx)
// as the user navigates, which keeps each "page" carrying the right schema
// for tools/crawlers that render the JS.

import { brand, about, services, contact, blog } from "./content";

export const SITE_URL = "https://www.albertdigitalalchemy.com";

// Real business address (Chennai office).
export const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: "76a, 8th Main Rd, Kanikapuram, Ram Nagar, Velachery",
  addressLocality: "Chennai",
  postalCode: "600042",
  addressCountry: "IN",
};

// Builds the real, navigable URL for a given route ("" = home).
function pageUrl(path) {
  return path ? `${SITE_URL}/${path}` : `${SITE_URL}/`;
}

const sameAs = [brand.instagram, brand.facebook, brand.whatsappChannel].filter(Boolean);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: brand.name,
  alternateName: brand.shortName,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-full.png`,
  },
  image: `${SITE_URL}/logo-full.png`,
  description:
    "Albert Digital Alchemy is a Digital Marketing Agency in Chennai delivering SEO, AI SEO, Google Ads, Social Media Marketing, Branding, and Web Development Services.",
  email: brand.email,
  telephone: brand.phoneHref,
  address: businessAddress,
  sameAs,
  founder: {
    "@type": "Person",
    name: about.leadership.name,
    jobTitle: about.leadership.title,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: brand.name,
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// ProfessionalService / LocalBusiness — now includes the real office address.
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: brand.name,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/logo-full.png`,
  email: brand.email,
  telephone: brand.phoneHref,
  address: businessAddress,
  areaServed: "IN",
  sameAs,
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: brand.phoneHref,
    email: brand.email,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
};

function webPage(path, name, description) {
  const url = pageUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}

// Every breadcrumb starts at Home — that's the correct schema.org pattern
// (position 1 should always be the site root, not the current page's parent
// in isolation), and every "item" URL uses the real #/route hash path.
function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

// ---- Home ----
export const homeSchema = [
  webPage("", brand.name, about.intro),
  organizationSchema,
  professionalServiceSchema,
];

// ---- About ----
export const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl("about")}#webpage`,
    url: pageUrl("about"),
    name: about.heading,
    description: about.intro,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: about.leadership.name,
    jobTitle: about.leadership.title,
    description: about.leadership.bio,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/founder.jpg`,
    url: pageUrl("about"),
    knowsAbout: [
      "Digital Marketing",
      "Social Media Marketing",
      "Branding",
      "Content Marketing",
      "Search Engine Optimization",
      "Website Development",
    ],
  },
  breadcrumb([{ name: "About", path: "about" }]),
];

// ---- Services ----
// One Service entity per offering, plus WebPage + BreadcrumbList for the page.
export const servicesSchema = [
  webPage("services", services.heading, "Digital marketing services offered by Albert Digital Alchemy."),
  breadcrumb([{ name: "Services", path: "services" }]),
  ...services.items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.description,
    serviceType: item.title,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "IN",
    url: pageUrl("services"),
  })),
];

// ---- Clients (kept as WebPage + BreadcrumbList only — no schema type in the
// checklist maps directly to a client-logo showcase page) ----
export const clientsSchema = [
  webPage("clients", "Our Clients", "Brands and businesses Albert Digital Alchemy has worked with."),
  breadcrumb([{ name: "Clients", path: "clients" }]),
];

// ---- Blog listing ----
// The blog is explicitly "under construction" with no published posts yet
// (see src/data/content.js -> blog), so only the listing-level schema is
// added now. Add BlogPosting schema per article once real posts exist.
export const blogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${pageUrl("blog")}#blog`,
    name: blog.heading,
    description: blog.subheading,
    url: pageUrl("blog"),
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  webPage("blog", blog.heading, blog.subheading),
  breadcrumb([{ name: "Blog", path: "blog" }]),
];

// ---- Contact ----
export const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl("contact")}#webpage`,
    url: pageUrl("contact"),
    name: contact.heading,
    description: contact.subheading,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  },
  professionalServiceSchema,
  breadcrumb([{ name: "Contact", path: "contact" }]),
];
