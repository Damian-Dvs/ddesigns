import { NavLink } from 'react-router-dom';
import Container from './Container';
import Logo from './Logo';

const base = 'px-3 py-2 rounded-lg text-sm font-medium';
const active = 'text-[var(--color-primary)]';
const idle = 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <nav aria-label="Primary" className="flex items-center justify-between py-3">
          <NavLink to="/" className="focus-visible:ring-2 ring-[var(--color-primary)] rounded-lg" aria-label="DDesigns — Home">
            <Logo />
          </NavLink>

          <ul className="flex items-center gap-1 sm:gap-2">
            {[
              { to: '/services', label: 'Services' },
              { to: '/work', label: 'Work' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((i) => (
              <li key={i.to}>
                <NavLink to={i.to} className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
                  {({ isActive }) => <span aria-current={isActive ? 'page' : undefined}>{i.label}</span>}
                </NavLink>
              </li>
            ))}
            <li className="hidden sm:block">
              <a href="/contact" className="btn btn-primary">Free quote</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
