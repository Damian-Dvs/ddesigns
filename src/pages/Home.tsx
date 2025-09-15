import Hero from '../components/Hero';
import Section from '../components/Section';
import ShowcaseCard from '../components/ShowcaseCard';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <main id="main">
      <Hero
        kicker="Websites for local businesses"
        title="Get clean, fast websites that brings in enquiries"
        intro="I design and build straightforward websites for small local businesses — trades, cafés, salons, instructors, charities and sole traders. Clear content, modern design and SEO basics so people can find you."
        ctas={[
          { label: 'Free quote', to: '/contact', variant: 'primary' },
          { label: 'See work', to: '/work', variant: 'ghost' },
        ]}
        align="center"
      />

      {/* Feature strip */}
      <Section>
        <div className="grid sm:grid-cols-3 gap-6">
          <FeatureCard title="Clear" blurb="Pages that explain what you do and how to contact you." />
          <FeatureCard title="Fast" blurb="Quick to load on mobile and desktop using modern tooling." />
          <FeatureCard title="Found" blurb="SEO essentials so locals can find you on Google." />
        </div>
      </Section>

      {/* What to expect */}
      <Section tint>
        <div className="measure center content">
          <h2>Simple, practical process</h2>
          <div className="points">
            <p>We agree the pages and priorities, then move quickly with short feedback loops.</p>
            <p>I write tidy, plain-English copy and make sure every page has a clear next step.</p>
            <p>You’ll always see progress and know what’s next.</p>
          </div>
        </div>
      </Section>

      {/* Recent work highlights (placeholder cards keep structure) */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShowcaseCard title="Local trades" blurb="Small brochure site with services and reviews." result="More calls from local searches." />
          <ShowcaseCard title="Café & bakery" blurb="Menu, opening times and Instagram gallery." result="Clear info and more footfall." />
          <ShowcaseCard title="Charity" blurb="Clean structure and better accessibility." result="Easier to find information." />
        </div>
      </Section>

      {/* CTA */}
      <Section align="center">
        <div className="measure center">
          <h2 className="h1">Ready to get started?</h2>
          <p className="intro">Tell me about your business and what you need. I’ll reply with options and costs.</p>
          <div className="mt-4">
            <a href="/contact" className="btn btn-primary">Free quote</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
