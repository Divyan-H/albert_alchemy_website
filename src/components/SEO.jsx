import { useEffect } from "react";

const SITE_URL = "https://www.albertdigitalalchemy.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo-full.png`;

function absoluteUrl(image) {
  if (!image) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(image)) return image;
  return `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
}

/**
 * Injects per-page <title>, meta description, canonical link, Open Graph /
 * Twitter tags, an optional robots noindex directive, and one or more
 * JSON-LD <script> blocks into <head> for as long as the page is mounted,
 * then restores everything on unmount/route change.
 *
 * Without updating the og: and twitter: tags per route, every shared link (WhatsApp,
 * LinkedIn, Slack, Facebook) previews with the homepage's title/description/
 * image, because those crawlers read the static index.html and don't run
 * this component's JS — so the tags must already exist in index.html and
 * this component only overwrites their content.
 *
 * `schema` can be a single JSON-LD object or an array of them (each becomes
 * its own <script type="application/ld+json"> tag, which is the pattern
 * Google's Rich Results tooling expects for multiple entities per page).
 */
export default function SEO({ title, description, path = "", schema, image, noindex = false }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    // For noindex pages (currently just the 404), self-canonical to the
    // actual URL the visitor landed on instead of leaving/claiming whatever
    // canonical index.html shipped with (the homepage) — a stale canonical
    // there would wrongly tell crawlers this broken URL IS the homepage.
    const url = noindex
      ? window.location.href.split("?")[0].split("#")[0]
      : path
        ? `${SITE_URL}/${path}`
        : `${SITE_URL}/`;
    const imageUrl = absoluteUrl(image);

    const setContent = (selector, value) => {
      if (value == null) return null;
      const el = document.querySelector(selector);
      if (!el) return null;
      const prevValue = el.getAttribute("content") ?? el.getAttribute("href");
      const attr = el.hasAttribute("href") ? "href" : "content";
      el.setAttribute(attr, value);
      return { el, attr, prevValue };
    };

    const restores = [
      setContent('meta[name="description"]', description),
      setContent('link[rel="canonical"]', url),
      setContent('meta[property="og:title"]', title),
      setContent('meta[property="og:description"]', description),
      setContent('meta[property="og:url"]', url),
      setContent('meta[property="og:image"]', imageUrl),
      setContent('meta[name="twitter:title"]', title),
      setContent('meta[name="twitter:description"]', description),
      setContent('meta[name="twitter:image"]', imageUrl),
    ].filter(Boolean);

    let robotsTag = null;
    let prevRobotsContent = null;
    let robotsTagWasCreated = false;
    if (noindex) {
      robotsTag = document.querySelector('meta[name="robots"]');
      if (!robotsTag) {
        robotsTag = document.createElement("meta");
        robotsTag.setAttribute("name", "robots");
        document.head.appendChild(robotsTag);
        robotsTagWasCreated = true;
      } else {
        prevRobotsContent = robotsTag.getAttribute("content");
      }
      robotsTag.setAttribute("content", "noindex, follow");
    }

    const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
    const injectedScripts = schemas.map((obj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageSchema = "true";
      script.textContent = JSON.stringify(obj);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = prevTitle;
      restores.forEach(({ el, attr, prevValue }) => {
        if (prevValue !== null) el.setAttribute(attr, prevValue);
      });
      if (robotsTag) {
        if (robotsTagWasCreated) robotsTag.remove();
        else robotsTag.setAttribute("content", prevRobotsContent ?? "");
      }
      injectedScripts.forEach((s) => s.remove());
    };
  }, [title, description, path, schema, image, noindex]);

  return null;
}
