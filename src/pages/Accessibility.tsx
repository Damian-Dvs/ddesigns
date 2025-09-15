import Hero from '../components/Hero';
import Section from '../components/Section';

export default function Accessibility() {
  return (
    <>
      <Hero
        kicker="Accessibility"
        title="Accessibility statement"
        intro="I aim to meet WCAG 2.2 AA across this site and the sites I build."
        align="center"
      />

      <Section>
        <div className="measure center content">
          <h2>What I do</h2>
          <ul>
            <li>Use semantic HTML and logical headings.</li>
            <li>Ensure keyboard navigation and visible focus states.</li>
            <li>Maintain colour contrast of at least 4.5:1 for text.</li>
            <li>Provide descriptive alt text for meaningful images.</li>
            <li>Respect reduced-motion preferences and avoid flashing content.</li>
          </ul>

          <h2>Known limitations</h2>
          <p>Some third-party embeds may not fully meet the same standard. I review alternatives where possible.</p>

          <h2>Feedback</h2>
          <p>If you find any accessibility issues, please email <a className="link" href="mailto:you@example.com">you@example.com</a>. I’ll review and fix problems as a priority.</p>
        </div>
      </Section>
    </>
  );
}
