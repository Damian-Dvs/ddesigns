import Hero from '../components/Hero';
import Section from '../components/Section';

export default function Contact() {
  return (
    <>
      <Hero
        kicker="Get in touch"
        title="Contact"
        intro="Tell me about your business and what you need. I’ll get back to you within one working day."
        ctas={[{ label: 'Email me', to: 'mailto:you@example.com', variant: 'ghost' }]}
        align="center"
      />

      <Section tint align="center">
        <div className="measure center">
          <h2 className="h1">Ways to contact me</h2>
          <p className="intro">Pick whatever suits you best — I reply within one working day.</p>
          <div className="grid sm:grid-cols-3 gap-6 mt-6">
            <div className="card p-6">
              <h3 className="font-semibold">Email</h3>
              <p className="text-[var(--color-ink-muted)] mt-2"><a className="link" href="mailto:you@example.com">you@example.com</a></p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Phone</h3>
              <p className="text-[var(--color-ink-muted)] mt-2"><a className="link" href="tel:+440000000000">+44 (0)0000 000000</a></p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Project form</h3>
              <p className="text-[var(--color-ink-muted)] mt-2">Prefer a form? <a className="link" href="/contact">Start here</a>.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
