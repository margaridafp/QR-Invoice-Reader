import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';

import {theme} from './constants';
import Result from './Result';
import Scan from './Scan';

function App(): JSX.Element {
  const [codeResponse, setCodeResponse] = React.useState<string|null>(null);

  const onGetResponse = React.useCallback((response: string | null) => {
    setCodeResponse(response);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {!codeResponse ?
      <Scan onGetResponse={onGetResponse}/> :
      <Result response={codeResponse} onGetResponse={onGetResponse} />}
    </ThemeProvider>
  );
}

export default App;
