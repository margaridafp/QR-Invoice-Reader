import {
  FormControl,
  Icon,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ptFlag from 'flag-icon-css/flags/4x3/pt.svg';
import enFlag from 'flag-icon-css/flags/4x3/us.svg';
import React from 'react';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    float: 'right',
    marginRight: '5px',
  },
  selectMenu: {
    'display': 'flex',
    'flexDirection': 'row',
    'fontSize': '0.5rem',

  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFlag: {
    fontSize: '1rem',
    marginRight: '5px',
  },
  image: {
    height: 'inherit',
  },
  selectRoot: {
    '&:after': {
      borderRadius: '0px',
    },
  },
}));

const AVAILABLE_FLAGS: {[id: string]:{flag:string, name:string}} = {
  pt: {flag: ptFlag, name: 'Português'},
  en: {flag: enFlag, name: 'English'},
};

function LanguageSelector(): JSX.Element {
  const classes = useStyles();
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
      className={classes.root}
    >
      <Select
        key= {lang}
        classes={{
          root: classes.selectRoot,
          select: classes.selectMenu}}
        disableUnderline
        value={lang}
        defaultValue={currentLang}
        onChange={languageHandler}
      >
        {Object.keys(AVAILABLE_FLAGS).map((f) =>
          <MenuItem
            className={classes.menuItem}
            key={f}
            value={f}
          >
            <Icon className={classes.iconFlag}>
              <img src={AVAILABLE_FLAGS[f].flag}
                className={classes.image}
              />
            </Icon>
            <Typography variant='caption'>{AVAILABLE_FLAGS[f].name}</Typography>
          </MenuItem>)}

      </Select>
    </FormControl>
  );
}

export default LanguageSelector;
