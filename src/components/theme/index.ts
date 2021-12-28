import {
  ThemeOptions,
  SimplePaletteColorOptions,
  Theme,
  createTheme 
} from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import React from "react";
export const themeProps: ThemeOptions["props"] = {
  MuiTextField: {
    variant: 'outlined',
    margin: 'dense',
  },
};

export const defaultPrimary = blue[500];
export const defaultSecondary = orange[500];
export const defaultMode = "light";
export interface ThemeContext {
  mode: ThemeOptions["palette"]["props"];
  primary: SimplePaletteColorOptions["main"];
  secondary: SimplePaletteColorOptions["main"];
  toggleMode: () => void;
  updateColors: (
    primary?: SimplePaletteColorOptions["main"],
    secondary?: SimplePaletteColorOptions["main"]
  ) => void;
}

export const themeContext = React.createContext<ThemeContext>({
  mode: "light",
  primary: blue[500],
  secondary: blue[500],
  toggleMode: () => {
    /* Do nothing */
  },
  updateColors: () => {
    /* Do nothing */
  },
});

export function toggleMode(
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
): void {
  setTheme((oldTheme) => {
    return createTheme({
      // props: themeProps,
      palette: {
        primary: {
          main: oldTheme.palette.primary.main,
        },
        secondary: {
          main: oldTheme.palette.secondary.main,
        },
        mode: oldTheme.palette.mode === 'dark' ? 'light' : 'dark',
      },
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
    });
  });
  return;
}
