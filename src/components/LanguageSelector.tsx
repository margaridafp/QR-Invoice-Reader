import {
  FormControl,
  MenuItem,
  Select,
  Typography} from '@mui/material';
import ptFlag from 'flag-icon-css/flags/4x3/pt.svg';
import enFlag from 'flag-icon-css/flags/4x3/us.svg';
import React from 'react';
import {useTranslation} from 'react-i18next';

const AVAILABLE_FLAGS: {[id: string]:{flag:string, name:string}} = {
  pt: {flag: ptFlag, name: 'Português'},
  en: {flag: enFlag, name: 'English'},
};

function LanguageSelector(): JSX.Element {
  const {i18n} = useTranslation();
  const [lang, setLang] = React.useState();

  const currentLang= i18n.languages.find((l) =>
    Object.keys(AVAILABLE_FLAGS).includes(l));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const languageHandler = React.useCallback((event:any) => {
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
            <img src={AVAILABLE_FLAGS[f].flag}
            />
            <Typography variant='caption'>{AVAILABLE_FLAGS[f].name}</Typography>
          </MenuItem>)}

      </Select>
    </FormControl>
  );
}

export default LanguageSelector;
