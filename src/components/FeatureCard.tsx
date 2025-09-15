import type { ReactNode } from 'react';

type Props = {
  title: string;
  blurb: string;
  icon?: ReactNode;
  align?: 'center' | 'left';
};

export default function FeatureCard({ title, blurb, icon, align = 'center' }: Props) {
  const alignWrap = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <article className={`card p-6 flex flex-col gap-2 h-full ${alignWrap}`}>
      {icon ? <div className="mb-1">{icon}</div> : null}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-[15px] text-[var(--color-ink-muted)]">{blurb}</p>
    </article>
  );
}
