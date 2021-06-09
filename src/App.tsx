import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';

import LanguageSelector from './components/LanguageSelector';
import {theme} from './constants';
import Result from './screens/Result';
import Scan from './screens/Scan';

function App(): JSX.Element {
  const [codeResponse, setCodeResponse] = React.useState<string|null>(null);

  const onGetResponse = React.useCallback((response: string | null) => {
    setCodeResponse(response);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LanguageSelector />
      {!codeResponse ?
      <Scan onGetResponse={onGetResponse}/> :
      <Result response={codeResponse} onGetResponse={onGetResponse} />}
    </ThemeProvider>
  );
}

export default App;
