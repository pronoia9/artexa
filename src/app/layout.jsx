import TemplateWrapper from './template-wrapper';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const siteUrl = 'https://ansin.dev';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hi. I'm Jay 👋",
  description:
    'Portfolio of Jay, a skilled full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'Jay, portfolio, full-stack developer, React, Next.js, web development',
  openGraph: {
    title: "Hi. I'm Jay 👋",
    description:
      'Portfolio of Jay, a skilled full-stack developer specializing in React, Next.js, and modern web technologies.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/screenshot.jpeg`,
        width: 1200,
        height: 630,
        alt: "Jay's Portfolio",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hi. I'm Jay 👋",
    description:
      'Portfolio of Jay, a skilled full-stack developer specializing in React, Next.js, and modern web technologies.',
    image: `${siteUrl}/screenshot.jpeg`,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'></link>
        <title>Hi. I'm Jay 👋</title>
      </head>
      <TemplateWrapper>{children}</TemplateWrapper>
    </html>
  );
}
