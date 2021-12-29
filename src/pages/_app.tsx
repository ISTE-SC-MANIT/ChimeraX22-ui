import type { AppProps } from 'next/app';
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from '@apollo/client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext, toggleMode } from '../components/theme';
import { useRouter } from 'next/router';
import { viewer_viewer } from '../__generated__/viewer';
import { viewer } from '../lib/queries/viewer';

export interface ComponentProps {
  viewer: viewer_viewer;
  // refetch: () => void;
  // setSuccessMessage: (message: string) => void;
  // setErrorMessage: (message: string) => void;
}

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWNiNDllMjA5MmU2OWI5YmNmMWJlZjMiLCJpYXQiOjE2NDA3MTI2NzQsImV4cCI6MTY0MTMxNzQ3NH0.AoPn1dNacdtSLUfQmWzBF3ho_g6uEmHHYRX8aKaJ7KY`;
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND}/graphql`,
  headers: { authorization: token },
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const paths = router.route.split('/');
  const first = paths[1];

  /* Page loading animation */
  const [routeChange, setRouteChange] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [viewerData, setViewerData] = React.useState<viewer_viewer | null>();

  const isProtectedRoute = React.useMemo(() => {
    return first === 'dashboard';
  }, [first]);

  // Router.events.on('routeChangeStart', () => {
  //   setRouteChange(true);
  // });
  // Router.events.on('routeChangeComplete', () => setRouteChange(false));
  // Router.events.on('routeChangeError', () => setRouteChange(false));

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const viewerQuery = useQuery<viewer_viewer>(viewer, { client: client });

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider
        value={{
          toggleMode: () => toggleMode(setMode),
        }}
      >
        <ThemeProvider theme={theme}>
          {routeChange && <h1>loading</h1>}
          {!isProtectedRoute ? (
            <Component {...pageProps} />
          ) : viewerQuery.loading ? (
            <>
              <h1>Loading</h1>
            </>
          ) : viewerQuery.data ? (
            <Component {...pageProps} viewer={viewerQuery.data.viewer}/>
          ) : (
            <>
              <h1>Error</h1>
            </>
          )}
        </ThemeProvider>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
