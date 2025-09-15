export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-16">
      <div className="container-prose py-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 justify-between">
        <p className="text-sm text-[var(--color-ink-muted)]">© {new Date().getFullYear()} DDesigns. All rights reserved.</p>
        <nav aria-label="Legal and site links">
          <ul className="flex flex-wrap items-center gap-4 text-sm">
            <li><a className="link" href="/privacy">Privacy</a></li>
            <li><a className="link" href="/accessibility">Accessibility</a></li>
            <li><a className="link" href="/sitemap.xml" rel="nofollow">Sitemap</a></li>
            <li><a className="link" href="mailto:you@example.com">you@example.com</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
