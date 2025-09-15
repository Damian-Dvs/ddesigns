import Hero from '../components/Hero';
import Section from '../components/Section';

export default function About() {
  return (
    <>
      <Hero
        kicker="About"
        title="A one-person web design studio"
        intro="You’ll work with me from start to finish — clear content, tidy design and quick load times."
        align="center"
      />

      <Section>
        <div className="measure center center-text content">
          <h2>How I work</h2>
          <div className="points">
            <p>I keep things simple so you can launch without drama.</p>
            <p>We agree the pages and priorities, then move quickly with short feedback loops.</p>
            <p>You’ll always see progress and know what’s next.</p>
          </div>

          <h2>Tools I use</h2>
          <div className="points">
            <p>React + Vite + Tailwind for a fast, modern front-end.</p>
            <p>Vercel for hosting, previews and SSL by default.</p>
            <p>SEO essentials, accessibility and performance as standard.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
