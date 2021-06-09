import {makeStyles} from '@material-ui/core';
import React from 'react';

import CameraCard from './CameraCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  onGetResponse: (response: string) => void
}

function Scan(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CameraCard onGetResponse={props.onGetResponse}/>
    </div>
  );
}

export default Scan;
