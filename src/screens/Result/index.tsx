import {Button} from '@material-ui/core';
import {Card, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {keys} from '../../constants';
import {styles} from '../styles';

const useStyles = makeStyles(()=> ({
  text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

type Props = {
    response: string,
    onGetResponse: (response: string | null) => void
}

function Result(props: Props): JSX.Element {
  const {t} = useTranslation();
  const classes = useStyles();
  const mainClasses = styles();
  const responses = props.response.split(keys.separator);

  // Get object from response
  const respObj = responses.reduce(function(obj: { [key: string]: string}, resp) {
    const key = resp.match(/([^:]+)/g);
    const value = resp.match(/[^:]*$/g);
    if (key && value) {
      const keyValue = key[0];
      obj[t(keyValue)] = value[0];
    }
    return obj;
  }, {});

  return (
    <>
      <Button onClick={()=>props.onGetResponse(null)}>{'\u2329'} {t('Back')}</Button>
      <div className={mainClasses.root}>
        <Card className={mainClasses.card}>
          <CardContent>
            {Object.keys(respObj).map((key, idx)=> {
              return (
                <div key={idx} className={classes.text}>
                  <Typography variant='subtitle1'>{key}: </Typography>
                  <Typography variant='subtitle2'> {respObj[key]}</Typography>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Result;
