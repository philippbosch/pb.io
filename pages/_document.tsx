import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="de"
      className="bg-gray-900 after:bg-gray-900 after:fixed after:bg-cover after:bg-fixed after:inset-0 after:-z-10 after:opacity-[0.15] after:blur-3xl after:grayscale print:after:bg-white print:after:bg-none"
    >
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
        <link
          rel="preload"
          href="/fonts/callunasansitalic-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#1c1917" />
      </Head>
      <body className="font-calluna text-gray-400 print:text-black print:bg-white print:bg-none">
        <NextScript />
        <Main />
      </body>
    </Html>
  );
}
