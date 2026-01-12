import * as ReactHelmetAsync from 'react-helmet-async';

const Helmet = ReactHelmetAsync.Helmet;

interface SEOHelmetProps {
  title: string;
  description: string;
  image?: string;
}

export function SEOHelmet({ title, description, image }: SEOHelmetProps) {
  const siteUrl = 'https://artedocoquetel.com.br';
  const defaultImage = '/og-image-padrao.jpg';

  return (
    <Helmet>
      <title>{title} | Arte e Coquetelaria</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`} />
      <meta property="og:type" content="article" />
    </Helmet>
  );
}
