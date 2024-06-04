const siteUrl = 'https://ansin.dev';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hi. I'm Jay 👋",
  description: 'Portfolio of Jay, a skilled full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'Jay, portfolio, full-stack developer, React, Next.js, web development',
  openGraph: {
    title: "Hi. I'm Jay 👋",
    description: 'Portfolio of Jay, a skilled full-stack developer specializing in React, Next.js, and modern web technologies.',
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
    description: 'Portfolio of Jay, a skilled full-stack developer specializing in React, Next.js, and modern web technologies.',
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
        <title>Hi. I'm Jay 👋</title>
      </head>
      {children}
    </html>
  );
}
