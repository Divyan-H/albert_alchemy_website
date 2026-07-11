// Central schema.org (JSON-LD) builders for Albert Digital Alchemy.
// Kept separate from content.js so the page-level "what copy shows on screen"
// data stays clean and this file only produces structured data objects.
//
// NOTE ON WHY THIS FILE EXISTS / HOW IT'S USED:
// This site is a client-side-routed single page app (react-router HashRouter),
// so there is only one real HTML document (index.html / dist/index.html).
// Organization + WebSite schema is injected once, statically, in index.html
// (see that file) so it's present even before React runs.
// Everything else here is injected per-route by <SEO /> (src/components/SEO.jsx)
// as the user navigates, which keeps each "page" carrying the right schema
// for tools/crawlers that render the JS.

import { brand, about, services, contact, blog } from "./content";

export const SITE_URL = "https://www.albertdigitalalchemy.com";

const sameAs = [brand.instagram, brand.facebook, brand.whatsappChannel].filter(Boolean);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: brand.name,
  alternateName: brand.shortName,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-full.png`,
  image: `${SITE_URL}/logo-full.png`,
  description:
    "Albert Digital Alchemy is a full-service Digital Marketing Company delivering SEO, AI SEO, Google Ads, Social Media Marketing, Branding, and Web Development Services.",
  email: brand.email,
  telephone: brand.phoneHref,
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

// ProfessionalService — no physical office address is published anywhere on
// the site, so this intentionally omits `address` / `geo` / opening hours.
// If a real business address should power local SEO, add it here later.
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: brand.name,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/logo-full.png`,
  email: brand.email,
  telephone: brand.phoneHref,
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
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/${path}#webpage`,
    url: `${SITE_URL}/${path}`,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}

function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}/${item.path}`,
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
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: about.heading,
    description: about.intro,
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
    url: `${SITE_URL}/about`,
    knowsAbout: [
      "Digital Marketing",
      "Social Media Marketing",
      "Branding",
      "Content Marketing",
      "Search Engine Optimization",
      "Website Development",
    ],
  },
  breadcrumb([
    { name: "Home", path: "" },
    { name: "About", path: "about" },
  ]),
];

// ---- Services ----
// One Service entity per offering, plus WebPage + BreadcrumbList for the page.
export const servicesSchema = [
  webPage("services", services.heading, "Digital marketing services offered by Albert Digital Alchemy."),
  breadcrumb([
    { name: "Home", path: "" },
    { name: "Services", path: "services" },
  ]),
  ...services.items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.description,
    serviceType: item.title,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "IN",
    url: `${SITE_URL}/services`,
  })),
];

// ---- Clients (kept as WebPage + BreadcrumbList only — no schema type in the
// checklist maps directly to a client-logo showcase page) ----
export const clientsSchema = [
  webPage("clients", "Our Clients", "Brands and businesses Albert Digital Alchemy has worked with."),
  breadcrumb([
    { name: "Home", path: "" },
    { name: "Clients", path: "clients" },
  ]),
];

// ---- Blog listing ----
// The blog is explicitly "under construction" with no published posts yet
// (see src/data/content.js -> blog), so only the listing-level schema is
// added now. Add BlogPosting schema per article once real posts exist.
export const blogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: blog.heading,
    description: blog.subheading,
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  webPage("blog", blog.heading, blog.subheading),
  breadcrumb([
    { name: "Home", path: "" },
    { name: "Blog", path: "blog" },
  ]),
];

// ---- Contact ----
export const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: contact.heading,
    description: contact.subheading,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  },
  professionalServiceSchema,
  breadcrumb([
    { name: "Home", path: "" },
    { name: "Contact", path: "contact" },
  ]),
];
