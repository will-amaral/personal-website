import Head from 'next/head';
import '@/styles/normalize.css';
import '@/styles/barebones.css';

import { AppWrapper } from '@/context/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Will Amaral</title>
        <meta
          name='description'
          content='Software Engineer and Journalist, I work with information and technology. JavaScript is my passion'
        />
        <meta name='author' content='Will Amaral' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link
          rel='alternate icon'
          href='/favicon.ico'
          type='image/x-icon'
          sizes='16x16'
        />
        <link rel='manifest' href='/manifest.webmanifest' />
        <meta name='theme-color' content='#0f0f0f' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
