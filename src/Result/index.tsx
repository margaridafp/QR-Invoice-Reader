import {Button} from '@material-ui/core';
import React from 'react';

import {keys, Values} from '../constants';

type Props = {
    response: string,
    onGetResponse: (response: string | null) => void
}

function Result(props: Props): JSX.Element {
  const responses = props.response.split(keys.separator);

  // Get object from response
  const respObj = responses.reduce(function(obj: { [key: string]: string}, resp) {
    const key = resp.match(/([^:]+)/g);
    const value = resp.match(/[^:]*$/g);
    if (key && value) {
      const keyValue = key[0];
      obj[keyValue] = value[0];
    }
    return obj;
  }, {});

  // Change keys
  const finalObj: {[key: string]: string} = Object.entries(respObj).reduce((acc, [key, value])=>
    ({
      ...acc,
      [keys[key as keyof Values] || key]: value,
    })
  , {});

  return (
    <>
      <Button onClick={()=>props.onGetResponse(null)}>{'\u2329'} Back</Button>
      {Object.keys(finalObj).map((key, idx)=> {
        return (
          <h1 key={idx}>{key} : {finalObj[key]}</h1>
        );
      })}
    </>);
}

export default Result;
