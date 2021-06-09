import {createMuiTheme} from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

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

export const theme = createMuiTheme({
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
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    caption: {
      [breakpoints.up('xs')]: {
        fontSize: '12px'},
      [breakpoints.up('md')]: {
        fontSize: '13px'},
      [breakpoints.up('xl')]: {
        fontSize: '15px'},
      color: colors.darkgrey,
      lineHeight: '1.5',
    },
  },
})
  ;

export const keys = {
  separator: '*',
};
