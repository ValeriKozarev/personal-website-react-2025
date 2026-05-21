import { Helmet } from 'react-helmet-async'

type PageHeadProps = {
  title: string
  description: string
  path: string
}

const SITE_URL = 'https://valkozarev.com'

export default function PageHead({ title, description, path }: PageHeadProps) {
  const url = `${SITE_URL}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={url} />
    </Helmet>
  )
}
