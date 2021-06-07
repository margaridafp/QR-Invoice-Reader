import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';

import {theme} from './constants';
import Scan from './Scan';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Scan />
    </ThemeProvider>
  );
}

export default App;
