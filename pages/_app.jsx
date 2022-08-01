import Head from 'next/head'
import GlobalStyle from '@/styles/GlobalStyle';
import styled from 'styled-components';


import Burger from '@/components/Burger.jsx';
import Navigation from '@/components/Navigation.jsx';
import NavigationMobile from '@/components/NavigationMobile';
import { AppWrapper } from '@/state/state';


function MyApp({ Component, pageProps }) {
  return (
    <div>
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

const AppContainer = styled.div`
  padding: 25px;
`;


export default MyApp;

