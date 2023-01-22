import type { AppProps } from 'next/app';
import Head from 'next/head'
import '@/styles/globals.css';


import Burger from '@/components/Burger';
import Navigation from '@/components/Navigation';
import NavigationMobile from '@/components/NavigationMobile';
import { AppWrapper } from '@/state/state';


function MyApp({ Component, pageProps } : AppProps) {
  return (
    <div>
      <Head>
        <title>Christian Valenzuela</title>
        <meta
          name="description"
          content="Christian Valenzuela, Javascript Developer"
        />
        

      </Head>

      <AppWrapper>
        <Navigation />
        <Burger />
        <NavigationMobile />

        <Component {...pageProps} />

      </AppWrapper>

    </div>
  );
}


export default MyApp;

