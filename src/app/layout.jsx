import Head from 'next/head';

export default function RootLayout({ children }) {
  const title = "Hi. I'm Jay 👋";
  const description = 'Portfolio of Jay, a skilled full-stack developer specializing in React, Next.js, and modern web technologies.';
  const imageUrl = 'https://ansin.dev/screenshot.jpeg';
  const url = 'https://ansin.dev';

  return (
    <html lang='en' suppressHydrationWarning={true}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content='Jay, portfolio, full-stack developer, React, Next.js, web development' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={imageUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={imageUrl} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>{children}</body>
    </html>
  );
}
