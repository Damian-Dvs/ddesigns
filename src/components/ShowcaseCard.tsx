type Props = {
  title: string;
  blurb: string;
  result?: string;
  align?: 'center' | 'left';
  image?: string;
};

export default function ShowcaseCard({ title, blurb, result, align = 'center', image }: Props) {
  const alignWrap = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <article className={`card p-4 flex flex-col h-full ${alignWrap}`}>
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/10] rounded-[16px] object-cover border border-[var(--color-border)]"
        />
      ) : (
        // fallback if no image passed
        <div className="w-full aspect-[16/10] rounded-[16px] border border-[var(--color-border)] bg-[var(--color-tint)]" />
      )}

      <div className="mt-4 w-full">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-[var(--color-ink-muted)] mt-1 text-[15px]">{blurb}</p>
        {result ? (
          <p className="mt-2 text-sm">
            <strong>Result:</strong> {result}
          </p>
        ) : null}
      </div>
    </article>
  );
}