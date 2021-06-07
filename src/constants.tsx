import {createMuiTheme} from '@material-ui/core';

export const colors = {
  darkgreen: '#39603D',
  lightblue: '#A3BCB6',
  darkgrey: '#3C403D',
  lightgrey: '#DADED4',
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.darkgrey,
    },
    secondary: {
      main: colors.lightblue,
    },
  },
})
  ;
