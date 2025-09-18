import Hero from '../components/Hero';
import Section from '../components/Section';

export default function Privacy() {
  return (
    <>
      <Hero
        kicker="Privacy"
        title="Privacy policy"
        intro="A plain-English summary of how I handle personal data."
        align="center"
      />

      <Section>
        <div className="measure center content">
          <p><em>Last updated: 15–09–2025</em></p>

          <h2>Who we are</h2>
          <p>DD web designs is a web design studio based in the UK. For any privacy questions, email <a className="link" href="mailto:you@example.com">you@example.com</a>.</p>

          <h2>What data we collect</h2>
          <ul>
            <li><strong>Contact details</strong> you send via forms or email (name, email, message).</li>
            <li><strong>Basic analytics</strong> to understand page traffic (no invasive tracking).</li>
          </ul>

          <h2>Why we collect it</h2>
          <ul>
            <li>To reply to enquiries and deliver projects.</li>
            <li>To improve the website and fix problems.</li>
          </ul>

          <h2>How long we keep it</h2>
          <p>We keep enquiry emails for up to 12 months unless we start a project, in which case we keep relevant records for our accounts and legal obligations.</p>

          <h2>Sharing</h2>
          <p>We don’t sell personal data. We may use trusted services to host the website and store emails. They only process data to provide their services.</p>

          <h2>Your rights</h2>
          <p>You can request a copy of your data or ask us to delete it. Email <a className="link" href="mailto:you@example.com">you@example.com</a>.</p>

          <h2>Cookies</h2>
          <p>We keep cookies to a minimum. Any analytics are set to respect privacy and avoid tracking individuals.</p>

          <p className="text-[var(--color-ink-muted)]">This page is general information and not legal advice.</p>
        </div>
      </Section>
    </>
  );
}
