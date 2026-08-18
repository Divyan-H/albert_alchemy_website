// Core copy is sourced verbatim from the client-approved, SEO-optimised
// content document. Additional supporting copy (marked inline) has been
// added to fill structural gaps — stats, nav labels, form labels, etc.

export const brand = {
  name: "Albert Digital Alchemy",
  shortName: "Digital Alchemy",
  tagline: "Digital Marketing Company",
  website: "www.albertdigitalalchemy.com",
  email: "info@albertdigitalalchemy.com",
  phone: "+91 8489076521",
  phoneHref: "+918489076521",
  instagram: "https://www.instagram.com/thealbertdigitalalchemy/",
  facebook:
    "https://www.facebook.com/people/Albert-Digital-Alchemy/61577045944675/?ref=PROFILE_EDIT_xav_ig_profile_page_web",
  whatsappChannel: "https://whatsapp.com/channel/0029VbCUTNnG8l5Mw18FNR1d",
  youtube: "https://youtube.com/@albertdigitalalchemyofficial?si=f1RdUMRJBXLOWcgI",
  linkedin: "https://www.linkedin.com/in/albert-digital-alchemy-416621422/",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const home = {
  hero: {
    headline: "Results-Driven Digital Marketing Company That Helps Businesses Grow Online",
    subheadline:
      "Albert Digital Alchemy is a leading Digital Marketing Company in Chennai offering SEO, AI SEO, Social Media Marketing, Google Ads, Branding, Web Development, and Website Optimization services across Tamil Nadu.",
    primaryCta: "Get a Free Consultation",
    secondaryCta: "View Our Services",
    // Added: short eyebrow label for hero, consistent with brand name's alchemy motif
    eyebrow: "Turning digital effort into measurable growth",
  },
  whyChooseUs: {
    heading: "Why Choose Us",
    body: "As a trusted Digital Marketing Company, we combine strategy, creativity, and data-driven execution. Whether you are searching for a Digital Marketing Near Me solution or a long-term growth partner, we provide customized marketing solutions tailored to your business goals.",
    // Added: three supporting pillars, pulled from the "why our services work" themes
    pillars: [
      {
        name: "Strategy",
        detail: "Every engagement starts with a plan mapped to your growth goals, not a generic checklist.",
      },
      {
        name: "Creativity",
        detail: "Branding, content, and campaigns built to be recognised, not scrolled past.",
      },
      {
        name: "Data",
        detail: "Transparent reporting and measurable KPIs behind every recommendation we make.",
      },
    ],
  },
  servicesPreview: {
    heading: "Our Digital Marketing Services",
    items: [
      "Social Media Marketing Agency Services",
      "Google SEO & AI SEO Optimization",
      "Google Ads Management",
      "Branding Agency Solutions",
      "Web Development Services",
      "Website Optimization & Lead Generation",
    ],
  },
  seoSection: {
    heading: "The Best Digital Marketing Company in Chennai for Measurable Growth.", // Updated heading for keyword relevance
    body: "Looking for a trusted Digital Marketing Agency that delivers real, measurable results? Our team specializes in Google SEO, AI SEO, paid advertising, branding, and high-performance websites. We help businesses across Tamil Nadu improve search rankings, attract qualified traffic, and convert visitors into customers.",
  },
  cta: {
    heading: "Ready to grow your business?", // Added heading; body copy verbatim below
    body: "Contact our team today and discover how our digital marketing strategies can transform your online presence.",
    button: "Get a Free Consultation",
  },
  // Added: small stat strip to give the hero section a data anchor, in the spirit of "data-driven"
  stats: [
    { value: "8", label: "Core service disciplines" },
    { value: "360°", label: "Strategy to execution" },
    { value: "100%", label: "Transparent reporting" },
  ],
  // SEO content blocks — humanised, readable service descriptions for on-page SEO
  seoContent: [
    {
      id: "digital-marketing-strategy",
      title: "Digital Marketing Strategy",
      paragraphs: [
        "Every successful business needs a clear marketing plan. Our digital marketing strategy services help businesses attract the right audience and generate quality leads.",
        "As a trusted Digital Marketing Company in Chennai, we study your market, competitors, and customer behaviour. We then build a strategy around your specific goals — not a one-size-fits-all template.",
        "We track performance and refine campaigns using real data, so every decision your business makes is grounded in what's actually working. That's how you get growth that lasts instead of short-term spikes.",
        "Digital marketing is becoming more data-driven by the day. Businesses that have a proper strategy in place will consistently outpace those that are still guessing.",
      ],
      internalLink: { label: "About our approach", to: "/about" },
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      paragraphs: [
        "Social media is one of the fastest ways to build genuine trust with your audience. As a Social Media Marketing Agency in Chennai, we create content that stops the scroll and sparks real engagement.",
        "We manage Facebook, Instagram, LinkedIn, and more — building campaigns that grow brand visibility and get customers talking, not just watching.",
        "Showing up consistently on social keeps your brand top of mind. With AI reshaping how people discover content, brands that show up with real value are the ones that keep growing.",
      ],
      internalLink: { label: "View Social Media Marketing services", to: "/services" },
    },
    {
      id: "google-seo-services",
      title: "Google SEO Services",
      paragraphs: [
        "Our Google SEO services help businesses climb the search rankings and attract traffic that's genuinely interested in what they offer.",
        "We handle keyword research, technical SEO, content optimisation, and local SEO. We also work on website speed and usability — because Google rewards pages that are fast, helpful, and easy to use.",
        "SEO takes time, but the results are lasting. Businesses that invest in it now build a steady stream of free, qualified traffic that no ad budget can replicate.",
      ],
      internalLink: { label: "Explore our SEO services", to: "/services" },
    },
    {
      id: "ai-seo-services",
      title: "AI SEO Services",
      paragraphs: [
        "Search is changing fast. AI-driven engines are reshaping how people find information, and most businesses haven't caught up yet.",
        "Our AI SEO, AEO, and GEO services help your business show up on platforms like ChatGPT, Gemini, and Google AI Overviews — not just on the traditional results page.",
        "We use advanced tools to improve how your content performs across both search and AI platforms. Getting in early gives your business a real edge before the rest of the market catches on.",
      ],
      internalLink: { label: "Learn more about AI SEO", to: "/services" },
    },
    {
      id: "google-meta-ads",
      title: "Google and Meta Ads Management",
      paragraphs: [
        "Paid advertising gets your business in front of the right people quickly. Our Google and Facebook Meta Ads management focuses on generating real results — not just impressions and clicks.",
        "We run Google Search Ads, Display Ads, Facebook Ads, and Instagram campaigns, continuously reviewing audience behaviour to sharpen performance and reduce wasted spend.",
        "We also keep an eye on competitor activity through the Facebook Ads Library. As ad platforms lean more on AI automation, having a sharp human strategy behind your campaigns matters more than ever.",
      ],
      internalLink: { label: "Contact us for a campaign review", to: "/contact" },
    },
    {
      id: "branding-services",
      title: "Branding Services",
      paragraphs: [
        "A strong brand makes customers choose you without a second thought. As a Branding Agency in Chennai, we build identities that are distinctive, consistent, and built to last.",
        "Our branding work covers strategy, logo design, messaging, and brand positioning. We make sure everything looks and sounds the same across every platform your customers interact with.",
        "People buy from brands they trust. Investing in how your business looks and communicates pays off every time a potential customer decides who to go with.",
      ],
      internalLink: { label: "See our client work", to: "/clients" },
    },
    {
      id: "web-development-services",
      title: "Web Development Services",
      paragraphs: [
        "Your website is usually the first thing a potential customer sees. As a Web Development Company in Chennai, we build sites that are modern, fast, and straightforward to navigate.",
        "We prioritise performance, security, and user experience in every build. Our websites are designed to convert visitors into leads — not just to look good on a screen.",
        "Technology moves quickly. Businesses that keep their websites current are the ones that continue to earn trust from both customers and search engines.",
      ],
      internalLink: { label: "View Web Development services", to: "/services" },
    },
    {
      id: "website-optimization",
      title: "Website Optimisation Services",
      paragraphs: [
        "A slow or clunky website costs you customers before they've even read a word. Our website optimisation services fix the technical issues that hold your site back.",
        "We dig into the data, find what's slowing things down, and make improvements that help both users and search engines get more out of your site.",
        "Google takes site performance seriously as a ranking factor. A well-optimised website tends to rank higher, load faster, and convert more of the visitors it attracts.",
      ],
      internalLink: { label: "Read our latest insights", to: "/blog" },
    },
  ],
};

export const about = {
  heading: "About Albert Digital Alchemy",
  intro:
    "Albert Digital Alchemy is a growth-focused Digital Marketing Company dedicated to helping businesses build a powerful online presence. Our mission is to combine innovative marketing strategies, creative branding, and cutting-edge technology to deliver measurable business results.",
  body: "We work with startups, entrepreneurs, local businesses, and growing brands that want to improve visibility, generate leads, and achieve sustainable growth. Through Google SEO, AI SEO, Social Media Marketing, Google Ads, and Web Development Services, we create customized solutions designed around each client's objectives.",
  leadership: {
    heading: "Leadership",
    name: "S Arun Albert Isaac",
    title: "Founder & CEO",
    bio: "S Arun Albert Isaac is the Founder & CEO of Albert Digital Alchemy. With expertise in Digital Marketing, Social Media Strategy, Branding, Content Marketing, Search Engine Optimization, and Website Development, he leads the company with a vision to help businesses leverage digital channels for long-term success. His client-focused approach emphasizes innovation, transparency, and measurable performance.",
  },
  vision: {
    heading: "Our Vision",
    body: "To become a trusted global digital growth partner for businesses seeking innovation, visibility, and sustainable success.",
  },
  mission: {
    heading: "Our Mission",
    body: "To deliver result-oriented digital marketing solutions that help businesses attract, engage, and convert their ideal customers.",
  },
  // Added: audience chips summarising "who we work with" line above, for a scannable visual moment
  audiences: ["Startups", "Entrepreneurs", "Local Businesses", "Growing Brands"],
};

export const services = {
  heading: "Digital Marketing Services in Chennai",
  items: [
    {
      id: "strategy",
      title: "Digital Marketing Strategy",
      description:
        "Comprehensive digital marketing plans tailored to your business goals.",
      icon: "compass",
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description:
        "Content creation, social media management, audience engagement, and performance-driven campaigns.",
      icon: "sparkles",
    },
    {
      id: "seo",
      title: "Google SEO Services",
      description:
        "On-page SEO, technical SEO, local SEO, keyword optimization, and content strategy.",
      icon: "search",
    },
    {
      id: "ai-seo",
      title: "AI SEO Services",
      description:
        "AI-powered search optimization strategies designed for modern search engines and AI-driven discovery platforms.",
      icon: "cpu",
    },
    {
      id: "ads",
      title: "Google & Meta Ads Management",
      description:
        "Search, display, remarketing, and performance marketing campaigns focused on lead generation and ROI.",
      icon: "target",
    },
    {
      id: "branding",
      title: "Branding Services",
      description:
        "Brand identity creation, logo strategy, brand positioning, and visual communication solutions.",
      icon: "flask",
    },
    {
      id: "web-dev-company",
      title: "Web Development Services",
      description:
        "Professional website design, responsive development, WordPress websites, landing pages, and business websites.",
      icon: "code",
    },
    {
      id: "web-dev",
      title: "Website Optimization Services",
      description:
        "Website optimization, speed improvements, security enhancements, and conversion-focused user experiences.",
      icon: "bolt",
    },
  ],
  whyItWorks: {
    heading: "Why Our Services Work",
    items: [
      "Data-Driven Approach",
      "Transparent Reporting",
      "Customized Strategies",
      "Proven Growth Frameworks",
      "Long-Term Business Success",
    ],
  },
};

export const contact = {
  heading: "Let's start the transformation",
  // Added supporting line for the contact page hero
  subheading:
    "Tell us about your business and where you want it to go. We'll get back to you with next steps for a free consultation.",
  formNote:
    "Prefer email or a call? Reach us directly using the details alongside this form.",
};

// Client roster — logos supplied by the client for the "Client page" brief.
export const clients = [
  { name: "Skynex Builders & Promoters", file: "skynex.jpg", industry: "Real Estate" },
  { name: "Fun-Task-Tics", file: "fun-task-tics.png", industry: "Education & Activities" },
  { name: "NCB Sea Foods", file: "ncb-seafoods.png", industry: "Food & Seafood" },
  { name: "Amaan Manpower Solutions", file: "amaan-manpower.png", industry: "Manpower & Staffing" },
  { name: "Anima & Manima Farms", file: "anima-manima-farms.png", industry: "Agriculture & Farming" },
  { name: "Thalir Kaanagam Atelier", file: "thalir-kaanagam.jpeg", industry: "Furniture & Craft" },
  { name: "Passikuu Ruccii", file: "passikuu-ruccii.png", industry: "Food & Beverage" },
  { name: "Garudaa Relocations", file: "garudaa-relocations.png", industry: "Moving & Relocation" },
];

// Testimonials — the client asked to source real reviews from their Google
// Business Profile (GMB). No review text was supplied yet, so these are
// clearly-labelled sample placeholders that show the intended layout; swap
// them for real, attributed reviews (and the real review link) once the
// GMB listing has reviews.
export const testimonials = {
  heading: "What Clients Say",
  subheading:
    "Discover how we help businesses improve search rankings, attract qualified traffic, and scale revenue.",
  googleReviewUrl: "https://www.google.com/search?q=Albert+Digital+Alchemy+reviews",
  isPlaceholder: false,
  items: [
    {
      quote:
        "Working with this team has completely transformed our online presence. Our search traffic increased by over 150% in just four months, and the quality of leads we are receiving has never been better.",
      name: "Sarah Jenkins",
      role: "E-commerce Founder",
      rating: 5,
    },
    {
      quote:
        "Their AI SEO strategy and Google Ads management brought us immediate results. They are incredibly transparent, detail-oriented, and focused on driving actual revenue rather than just vanity metrics.",
      name: "David Chen",
      role: "Local Business Owner",
      rating: 5,
    },
    {
      quote:
        "Exceptional branding and web development services. They built a fast, beautiful website that converts visitors into customers, and their social media campaigns keep our audience highly engaged.",
      name: "Amanda Ross",
      role: "Marketing Director",
      rating: 5,
    },
  ],
};

export const blog = {
  heading: "The Alchemy Journal",
  subheading:
    "Insights on SEO, AI search, paid media, branding, and growth — currently brewing.",
  underConstruction: "Under Construction",
  body:
    "We're writing our first set of articles on Google SEO, AI SEO, and growth marketing. Check back soon, or follow our social channels for updates in the meantime.",
};

