import logoUrl from '../assets/logo.svg';

export default function Logo() {
  return (
    <img
      src={logoUrl}
      alt="DDesigns logo"
      width={100}
      height={100}
      className="block"
      decoding="async"
      loading="eager"
    />
  );
}