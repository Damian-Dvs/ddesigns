import Hero from '../components/Hero';
import Section from '../components/Section';

export default function NotFound() {
  return (
    <>
      <Hero
        kicker="404"
        title="Page not found"
        intro="The page you’re after doesn’t exist. Try the home page or contact me if you’re stuck."
        ctas={[{ label: 'Go home', to: '/', variant: 'primary' }]}
        align="center"
      />
      <Section align="center">
        <p className="intro">If you typed the address, double-check the spelling. If you followed a link, it may be out of date.</p>
      </Section>
    </>
  );
}
