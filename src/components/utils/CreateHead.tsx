import { Head } from '.'

interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const CreateHead = ({
  title = 'No page title',
  description = 'Page without description',
  image = 'http://defaultimage.com',
  url = '',
}: Props) => (
  <Head>
    <meta property='og:title' content={title} />
    <meta property='og:url' content={url} />
    <meta property='og:image' content={image} />
    <meta property='og:description' content={description} />
    <meta property='og:type' content='article' />
    <meta name='twitter:card' content={image} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name='description' content={description} />
  </Head>
)
