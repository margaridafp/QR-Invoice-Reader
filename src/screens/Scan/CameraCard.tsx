/* eslint-disable no-multi-str */
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import QrScanner from 'qr-scanner';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {styles} from '../styles';

const useStyles = makeStyles(()=> ({
  borders: {
    margin: '0px 1em 1em 1em',
    padding: '0.5em',
    background:
    'linear-gradient(to right, #3C403D 4px, transparent 4px) 0 0,\
    linear-gradient(to right, #3C403D 4px, transparent 4px) 0 100%,\
    linear-gradient(to left, #3C403D 4px, transparent 4px) 100% 0,\
    linear-gradient(to left, #3C403D 4px, transparent 4px) 100% 100%,\
    linear-gradient(to bottom, #3C403D 4px, transparent 4px) 0 0,\
    linear-gradient(to bottom, #3C403D 4px, transparent 4px) 100% 0,\
    linear-gradient(to top, #3C403D 4px, transparent 4px) 0 100%,\
    linear-gradient(to top, #3C403D 4px, transparent 4px) 100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 20px',
  },
  video: {
    width: '100%',
    display: 'none',
    aspectRatio: 'auto 400 / 400',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

type Props = {
  onGetResponse: (response: string) => void
}

function CameraCard(props: Props): JSX.Element {
  const classes = useStyles();
  const mainClasses = styles();
  const cameraRef = React.useRef<HTMLVideoElement>(null);
  const [qrResponse, setQrResponse] = React.useState('');
  const {t} = useTranslation();

  // Get response
  React.useEffect(()=>{
    props.onGetResponse(qrResponse);
  }, [qrResponse, props]);

  React.useEffect(()=> {
    if (cameraRef.current) {
      const qrScanner = new QrScanner(cameraRef.current, (result) => {
        setQrResponse(result);
        qrScanner.stop();
      }, () => '', 300);
      qrScanner.start();

      // @ts-ignore: canvas exist on QrScanner
      cameraRef?.current?.parentNode?.insertBefore(qrScanner.$canvas, cameraRef?.current?.nextSibling);
      // @ts-ignore: canvas exist on QrScanner
      qrScanner.$canvas.style.transform = 'scaleX(-1)';
    }
  }, [cameraRef]);

  return (
    <Card className={mainClasses.card}>
      <CardContent className={classes.content}>
        <PhotoCameraIcon />
        <Typography variant='body1' color="primary" gutterBottom>
          {t('Start scanning')}
        </Typography>
      </CardContent>
      <div className={classes.borders}>
        <CardMedia component='video'ref={cameraRef} className={classes.video} />
      </div>
    </Card>
  );
}

export default CameraCard;

