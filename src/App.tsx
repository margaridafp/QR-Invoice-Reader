import {Button, ThemeProvider} from '@mui/material';
import {styled} from '@mui/system';
import React, {Suspense} from 'react';
import {useTranslation} from 'react-i18next';

import LanguageSelector from './components/LanguageSelector';
import {theme} from './constants';
import Result from './screens/Result';
import Scan from './screens/Scan';

export const HeaderStyled = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

function App(): JSX.Element {
  const {t} = useTranslation();
  const [codeResponse, setCodeResponse] = React.useState<string|null>(null);

  const handleResponse = React.useCallback((response: string | null) => {
    setCodeResponse(response);
  }, []);

  return (
    <Suspense fallback="loading...">
      <ThemeProvider theme={theme}>
        <HeaderStyled>
          {codeResponse &&
            <Button onClick={()=>handleResponse(null)}>{'\u2329'} {t('Back')}</Button>
          }
          <LanguageSelector />
        </HeaderStyled>
        <main>
          {!codeResponse ?
            <Scan handleResponse={handleResponse}/> :
            <Result response={codeResponse} />
          }
        </main>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
