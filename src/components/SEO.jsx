import { useEffect } from "react";

/**
 * Injects a page-specific <title>, meta description, canonical link, and
 * one or more JSON-LD <script> blocks into <head> for as long as the page
 * is mounted, then cleans up on unmount/route change.
 *
 * `schema` can be a single JSON-LD object or an array of them (each becomes
 * its own <script type="application/ld+json"> tag, which is the pattern
 * Google's Rich Results tooling expects for multiple entities per page).
 */
export default function SEO({ title, description, path = "", schema }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    let descTag = null;
    let prevDescContent = null;
    if (description) {
      descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        prevDescContent = descTag.getAttribute("content");
        descTag.setAttribute("content", description);
      }
    }

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    let prevCanonicalHref = null;
    if (canonicalTag) {
      prevCanonicalHref = canonicalTag.getAttribute("href");
      const url = path
        ? `https://www.albertdigitalalchemy.com/${path}`
        : `https://www.albertdigitalalchemy.com/`;
      canonicalTag.setAttribute("href", url);
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
      if (descTag && prevDescContent !== null) descTag.setAttribute("content", prevDescContent);
      if (canonicalTag && prevCanonicalHref !== null) canonicalTag.setAttribute("href", prevCanonicalHref);
      injectedScripts.forEach((s) => s.remove());
    };
  }, [title, description, path, schema]);

  return null;
}
