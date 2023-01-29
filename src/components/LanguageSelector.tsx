import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography} from '@mui/material';
import React, {ReactNode, useEffect, useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import {PtFlagIcon, UsFlagIcon} from '../assets';

const AVAILABLE_FLAGS: {[id: string]:{flag:ReactNode, name:string}} = {
  pt: {flag: <PtFlagIcon width='20'/>, name: 'Português'},
  en: {flag: <UsFlagIcon width='20'/>, name: 'English'},
};

function LanguageSelector(): JSX.Element {
  const {i18n} = useTranslation();
  const [lang, setLang] = React.useState<string>();

  const currentLang = useMemo(() => {
    return i18n.languages.find((l) =>
      Object.keys(AVAILABLE_FLAGS).includes(l));
  }, [i18n.languages]);

  useEffect(() => {
    setLang(currentLang);
  }, [currentLang]);

  const languageHandler = React.useCallback((event:SelectChangeEvent<string>) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }, [i18n]);

  return (
    <FormControl
      sx={{
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Select
        key= {lang}
        sx={{
          'float': 'right',
          'marginRight': '5px',
          '.MuiOutlinedInput-notchedOutline': {border: 'none'},
          '.MuiOutlinedInput-input': {
            'display': 'flex',
            'alignItems': 'center',
            'gap': '5px',
          },
        }}
        variant='outlined'
        value={lang}
        defaultValue={currentLang}
        onChange={languageHandler}
      >
        {Object.keys(AVAILABLE_FLAGS).map((f) =>
          <MenuItem
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
            key={f}
            value={f}
          >
            {AVAILABLE_FLAGS[f].flag}
            <Typography variant='caption'>{AVAILABLE_FLAGS[f].name}</Typography>
          </MenuItem>)}

      </Select>
    </FormControl>
  );
}

export default LanguageSelector;
