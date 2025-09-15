import Hero from '../components/Hero';
import Section from '../components/Section';

export default function Services() {
  const services = [
    { name: 'Starter website', detail: 'A modern, fast site with the pages you need: Home, Services, About, Contact. Clear calls to action and simple navigation. Built with React and Tailwind, hosted on Vercel.', price: 'from £699' },
    { name: 'Website refresh', detail: 'Polish what you’ve got — improve structure, design, performance, accessibility and SEO. Keep what works, fix what doesn’t. Usually no rebuild required.', price: 'from £450' },
    { name: 'Care plan', detail: 'Small updates, new pages, performance checks, security and monitoring. A steady hand so your site stays healthy.', price: '£45/month' }
  ];

  return (
    <>
      <Hero
        kicker="Services"
        title="Practical help for local businesses"
        intro="Pick what you need now; add more later without a rebuild."
        ctas={[{ label: 'Free quote', to: '/contact', variant: 'primary' }]}
        align="center"
      />

      <Section>
        <ul className="grid gap-6">
          {services.map((s) => (
            <li key={s.name} className="card p-6 text-center">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">{s.detail}</p>
              <p className="mt-3 font-medium">{s.price}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tint align="center">
        <div className="measure center">
          <h2 className="h1">What’s included</h2>
          <p className="intro">Fast load times, mobile-first layout, accessible components, SEO basics, and friendly support.</p>
        </div>
      </Section>
    </>
  );
}
