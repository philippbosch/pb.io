import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="pb.io" customDomain="https://tock.weg.plus">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
