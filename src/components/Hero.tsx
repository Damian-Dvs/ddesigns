import type { ReactNode } from 'react';

type Cta = { label: string; to: string; variant?: 'primary' | 'ghost' };
type Props = {
  kicker?: string;
  title: string;
  intro?: ReactNode;
  ctas?: Cta[];
  align?: 'center' | 'left';
};

export default function Hero({ kicker, title, intro, ctas = [], align = 'center' }: Props) {
  const alignWrapper = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const ctaWrap = align === 'center' ? 'justify-center' : '';

  return (
    <div className="hero">
      <div className="container-prose w-full">
        <div className={`measure center grid gap-6 ${alignWrapper}`}>
          {kicker ? <span className="kicker">{kicker}</span> : null}
          <h1 className="display-1">{title}</h1>
          {intro ? <p className="intro">{intro}</p> : null}
          {ctas.length > 0 && (
            <div className={`flex gap-3 ${ctaWrap}`}>
              {ctas.map((c) => (
                <a key={c.label} href={c.to} className={`btn ${c.variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`}>
                  {c.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
