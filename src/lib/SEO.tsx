type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function SEO({
  title = 'DD Web Designs — Local Website Design',
  description = 'Affordable, friendly websites for small local businesses. Clear content, modern design, fast pages and SEO basics.',
  url = 'https://ddesigns.example/',
  image = '/favicon.svg',
}: Props) {
  return (
    <>
      {/* React 19: Document Metadata (React 18 fallback via index.html) */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
    </>
  );
}
