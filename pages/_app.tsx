import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import TagManager, { TagManagerArgs } from 'react-gtm-module';
// import { useEffect } from 'react';

import GoogleAnalytics from '@bradgarropy/next-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
  // const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  // const tagManagerArgs: TagManagerArgs = {
  //   gtmId,
  // };

  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  // }, []);

  return (
    <>
      <GoogleAnalytics measurementId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
