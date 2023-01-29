import {Card, CardContent, Typography} from '@mui/material';
import {styled} from '@mui/system';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {keys} from '../../constants';
import {BoxStyled, cardStyles} from '../styles';

export const ResultWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
});

interface ResultProps {
  response: string;
}

function Result({response}: ResultProps): JSX.Element {
  const {t} = useTranslation();
  const responses = response.split(keys.separator);

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
    <BoxStyled>
      <Card sx={cardStyles}>
        <CardContent>
          {Object.keys(respObj).map((key, idx)=> {
            return (
              <ResultWrapper key={idx}>
                <Typography variant='subtitle1'>{key}: </Typography>
                <Typography variant='subtitle2'> {respObj[key]}</Typography>
              </ResultWrapper>
            );
          })}
        </CardContent>
      </Card>
    </BoxStyled>
  );
}

export default Result;
