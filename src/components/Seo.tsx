import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { buildAbsoluteUrl, siteMeta } from "@/seo/siteMeta";

type JsonLd = Record<string, unknown>;

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
  structuredData?: JsonLd | JsonLd[];
};

const Seo = ({
  title,
  description,
  canonicalPath,
  image,
  type = "website",
  robots = "index,follow",
  structuredData,
}: SeoProps) => {
  const location = useLocation();

  const canonicalUrl = buildAbsoluteUrl(
    canonicalPath ?? location?.pathname ?? "/"
  );
  const imageUrl = buildAbsoluteUrl(
    image ?? siteMeta.defaultImage ?? siteMeta.logo
  );
  const jsonLd = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteMeta.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={siteMeta.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};

export default Seo;
