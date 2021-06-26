import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import '@/styles/normalize.css';
import '@/styles/barebones.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu site Pessoal</title>
        <meta name='description' content='Meu site pessoal' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Toaster position='top-center' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
