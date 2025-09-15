import { NavLink } from 'react-router-dom';
// IMPORTANT: move your logo file to src/assets/logo.svg
// Vite will fingerprint it on build (e.g. /assets/logo.8f3c12.svg)
import logoUrl from '../assets/logo.svg';

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-lg"
      aria-label="DDesigns — Home"
    >
      <img
        src={logoUrl}                 
        alt="DDesigns logo"
        width={150}
        height={150}
        className="block"
        decoding="async"
        loading="eager"
      />

    </NavLink>
  );
}
