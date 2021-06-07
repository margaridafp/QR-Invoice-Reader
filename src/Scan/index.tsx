import {makeStyles} from '@material-ui/core';
import React from 'react';

import CameraCard from './CameraCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Scan(): JSX.Element {
  const classes = useStyles();

  // Get QR response
  const [qrResponse, setQrResponse] = React.useState('');
  const onGetResponse = React.useCallback((response: string) => {
    setQrResponse(response);
  }, []);

  return (
    <div className={classes.root}>
      <CameraCard onGetResponse={onGetResponse}/>
      {qrResponse && <div>{qrResponse}</div>}
    </div>
  );
}

export default Scan;
