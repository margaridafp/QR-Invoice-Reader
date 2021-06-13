import React from 'react';

import {styles} from '../styles';
import CameraCard from './CameraCard';

type Props = {
  onGetResponse: (response: string) => void
}

function Scan(props: Props): JSX.Element {
  const mainClasses = styles();

  return (
    <div className={mainClasses.root}>
      <CameraCard onGetResponse={props.onGetResponse}/>
    </div>
  );
}

export default Scan;
