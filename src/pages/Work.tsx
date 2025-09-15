import Hero from '../components/Hero';
import Section from '../components/Section';
import ShowcaseCard from '../components/ShowcaseCard';

export default function Work() {
  const items = [
    { id: 1, title: 'Local trades business', blurb: 'Clear home page, simple services list and reviews section.', result: 'More calls from local searches.' },
    { id: 2, title: 'Professional services', blurb: 'Refreshed design and structure; better performance and SEO.', result: 'Cleaner messaging and more enquiries.' },
    { id: 3, title: 'Charity website', blurb: 'Improved navigation and accessibility across the site.', result: 'Visitors find information faster.' }
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
            <ShowcaseCard key={i.id} title={i.title} blurb={i.blurb} result={i.result} />
          ))}
        </div>
      </Section>
    </>
  );
}
