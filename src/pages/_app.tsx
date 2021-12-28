import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { ThemeProvider , createTheme } from "@mui/material/styles";
import { themeProps, defaultPrimary, defaultSecondary, defaultMode, themeContext, toggleMode } from "../components/theme";
function MyApp({ Component, pageProps }: AppProps) {

  const [currentTheme, setCurrentTheme] = React.useState(() =>
  createTheme({
      typography: {
          fontFamily: [
              'Nunito',
              'Montserrat',
              'Roboto',
              'sans-serif',
              'Arial',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
          ].join(','),
      },
      // props: themeProps,
      palette: {
        primary: {
            main: defaultPrimary,
          },
          secondary: {
              main: defaultSecondary,
          },
          mode: defaultMode,
      },
  })
);

  return (
    <ApolloProvider client={client}>
       <ThemeProvider theme={currentTheme}>
            <themeContext.Provider
                value={{
                    mode: currentTheme.palette.mode,
                    primary: currentTheme.palette.primary.main,
                    secondary: currentTheme.palette.secondary.main,
                    toggleMode: () => toggleMode(setCurrentTheme),
                    updateColors: () => {
                        /* Do nothing */
                    },
                }}>
                        </themeContext.Provider>
      <Component {...pageProps} />
     </ThemeProvider>
     </ApolloProvider>
  );
}

export default MyApp;
