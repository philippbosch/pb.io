import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/callunasansregular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/callunasansbold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="font-calluna text-gray-400 bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
