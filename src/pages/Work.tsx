import Hero from '../components/Hero';
import Section from '../components/Section';
import ShowcaseCard from '../components/ShowcaseCard';

export default function Work() {
  const items = [
    { id: 1, title: 'Local trades business', blurb: 'Clear home page, simple services list and reviews section.', result: 'More calls from local searches.', image: '/shropshine.jpg' },
    { id: 2, title: 'Headless Shopify sites (e-commerce)', blurb: 'Bring your own design to your shopify front-end.', result: 'Your in control of how you site looks and responds, all while remaining that familar shopify checkout experience' },
    { id: 3, title: 'Personal Websites', blurb: 'Custom Branding with personal updates and content management solution and contact forms', result: 'Visitors find information faster.', image: '/HB95.jpg' }
  ];    

  return (
    <>
      <Hero
        kicker="Selected projects"
        title="Work"
        intro="A few examples. Detailed case studies coming soon."
        ctas={[{ label: 'Free quote', to: '/contact', variant: 'primary' }]}
        align="center"
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <ShowcaseCard key={i.id} title={i.title} blurb={i.blurb} result={i.result} image={i.image} />
          ))}
        </div>
      </Section>
    </>
  );
}


