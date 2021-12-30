import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext, toggleMode } from '../components/theme';
import { useRouter } from 'next/router';
import { client } from '../lib/apollo';
import { viewer, viewer_viewer } from '../__generated__/viewer';
import { User } from '../lib/queries/user';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SEO from '../components/SEO';
export interface ComponentProps {
  viewer: viewer_viewer;
  refetch: () => void;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const paths = router.route.split('/');
  const first = paths[1];
  /*Snackbar States */
  const [success, setSuccess] = React.useState(false);
  const [errors, setError] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const handleClose = (event?: React.SyntheticEvent) => {
    setSuccess(false);
    setError(false);
  };

  const setSuccessMessage = (msg: string) => {
    setSuccessMsg(msg);
    setSuccess(true);
  };

  const setErrorMessage = (msg: string) => {
    setErrorMsg(msg);
    setError(true);
  };
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

  const viewerQuery = useQuery<viewer>(User, { client: client });

  return (
    <>
      <SEO />
      <ApolloProvider client={client}>
        <ThemeContext.Provider
          value={{
            toggleMode: () => toggleMode(setMode),
          }}
        >
          <ThemeProvider theme={theme}>
            <>
              {routeChange && <h1>loading</h1>}
              {!isProtectedRoute ? (
                <Component
                  {...pageProps}
                  setSuccessMessage={setSuccessMessage}
                  setErrorMessage={setErrorMessage}
                />
              ) : viewerQuery.loading ? (
                <>
                  <h1>Loading</h1>
                </>
              ) : viewerQuery.data ? (
                <Component
                  {...pageProps}
                  viewer={viewerQuery.data.viewer}
                  refetch={viewerQuery.refetch}
                  setSuccessMessage={setSuccessMessage}
                  setErrorMessage={setErrorMessage}
                />
              ) : (
                <>
                  <h1>Error</h1>
                </>
              )}
              <Snackbar open={true} autoHideDuration={6000}>
                <Alert onClose={handleClose} severity='success'>
                  {successMsg}
                </Alert>
              </Snackbar>
              <Snackbar open={errors} autoHideDuration={6000}>
                <Alert onClose={handleClose} severity='error'>
                  {errorMsg}
                </Alert>
              </Snackbar>
            </>
          </ThemeProvider>
        </ThemeContext.Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
