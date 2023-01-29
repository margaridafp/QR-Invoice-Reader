import {createTheme} from '@mui/material';
import {createBreakpoints} from '@mui/system';

export const fontsConfig = {
  family: 'Arial',
  regular: 400,
  bold: 700,
  medium: 500,
};

export const colors = {
  darkgreen: '#39603D',
  lightblue: '#A3BCB6',
  darkgrey: '#3C403D',
  lightgrey: '#DADED4',
};

const breakpointValues= {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const breakpoints = createBreakpoints({values: breakpointValues});

export const theme = createTheme({
  breakpoints: {
    values: breakpointValues,
  },
  palette: {
    primary: {
      main: colors.darkgrey,
    },
    secondary: {
      main: colors.lightblue,
    },
  },
  typography: {
    caption: {
      [breakpoints.up('xs')]: {
        fontSize: '12px'},
      [breakpoints.up('md')]: {
        fontSize: '13px'},
      [breakpoints.up('xl')]: {
        fontSize: '15px'},
      color: colors.darkgrey,
      lineHeight: '1.5',
      fontFamily: fontsConfig.family,
      fontWeight: fontsConfig.regular,
    },
    body1: {
      fontFamily: fontsConfig.family,
      fontWeight: fontsConfig.medium,
    },
    subtitle1: {
      fontFamily: fontsConfig.family,
      fontWeight: fontsConfig.bold,
      color: colors.darkgrey,
    },
  },
})
  ;

export const keys = {
  separator: '*',
};
