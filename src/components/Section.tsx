import type { ReactNode } from 'react';

export default function Section({
  children,
  tint = false,
  align = 'left',
}: {
  children: ReactNode;
  tint?: boolean;
  align?: 'left' | 'center';
}) {
  const alignClass = align === 'center' ? 'center-text' : '';
  return (
    <section className={`section ${tint ? 'tint' : ''}`}>
      <div className={`container-prose ${alignClass}`}>{children}</div>
    </section>
  );
}
