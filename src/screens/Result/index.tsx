import {Button} from '@material-ui/core';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {keys} from '../../constants';

type Props = {
    response: string,
    onGetResponse: (response: string | null) => void
}

function Result(props: Props): JSX.Element {
  const {t} = useTranslation();
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
      <Button onClick={()=>props.onGetResponse(null)}>{'\u2329'} Back</Button>
      {Object.keys(respObj).map((key, idx)=> {
        return (
          <h1 key={idx}>{key} : {respObj[key]}</h1>
        );
      })}
    </>);
}

export default Result;
