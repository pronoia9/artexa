export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <title>Hi. I'm Jay 👋</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
