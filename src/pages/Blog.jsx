import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { blog } from "../data/content";
import { blogSchema } from "../data/schema";

export default function Blog() {
  return (
    <PageTransition>
      <SEO
        title="Blog | Albert Digital Alchemy"
        description={blog.subheading}
        path="blog"
        schema={blogSchema}
      />
      <section className="relative overflow-hidden bg-void pt-36 pb-28 sm:pt-44 sm:pb-36 min-h-[80vh] flex items-center">
        <AuroraField startingGap={110} breathingRange={4} />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal className="flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-gold mb-8">
            <span className="h-px w-8 bg-gold/60" />
            {blog.underConstruction}
            <span className="h-px w-8 bg-gold/60" />
          </Reveal>

          <Reveal delay={0.16}>
            <h1 className="font-display text-white text-4xl sm:text-5xl leading-[1.1] mb-6">
              {blog.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="max-w-xl mx-auto text-text-onvoid text-base sm:text-lg leading-relaxed mb-3">
              {blog.subheading}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="max-w-xl mx-auto text-text-onvoid-dim text-sm leading-relaxed mb-10">
              {blog.body}
            </p>
          </Reveal>

          <Reveal delay={0.38} className="flex flex-wrap justify-center gap-4">
            <Button to="/" variant="primary">
              Back to Home
            </Button>
            <Button to="/contact" variant="outline">
              Get in Touch
            </Button>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
