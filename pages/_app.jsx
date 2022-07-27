import React, { useState } from 'react';
import Head from 'next/head'
import GlobalStyle from '@/styles/GlobalStyle';


// // pages
// import AboutMe from './pages/AboutMe/AboutMe';
// import Portfolio from './pages/Portfolio/Portfolio';
// import Contact from './pages/Contact/Contact';
// import Resume from './pages/Resume/Resume';

// here are the components
import Burger from '@/components/Burger.jsx';
import Navigation from '@/components/Navigation.jsx';
import NavigationMobile from '@/components/NavigationMobile';
import { AppWrapper } from '@/state/state';

// import styles
// import './main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <title>Christian Valenzuela</title>
        <meta
          name="description"
          content="Christian Valenzuela, Javascript Developer"
        />
        

      </Head>
      <GlobalStyle />

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

