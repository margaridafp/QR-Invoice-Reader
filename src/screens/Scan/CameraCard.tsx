/* eslint-disable no-multi-str */
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import QrScanner from 'qr-scanner';
import React from 'react';
import {useTranslation} from 'react-i18next';

// @ts-ignore: implicit any
import QrScannerWorkerPath from '!!file-loader!../../../node_modules/qr-scanner/qr-scanner-worker.min.js';

import {styles} from '../styles';

const useStyles = makeStyles(() => ({
  borders: {
    margin: '0px 1em 1em 1em',
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
    position: 'relative',
    height: '319px',
    width: '316px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  cameraFlip: {
    color: 'white',
    position: 'absolute',
    bottom: 20,
    right: 20,
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
  const [qrScanner, setQrScanner] = React.useState<QrScanner | null>(null);
  const [facingMode, setFacingMode] = React.useState<'environment' | 'user'>('environment');
  const [availableCameras, setAvailableCameras] = React.useState<QrScanner.Camera[] | never[]>([]);
  const {t} = useTranslation();

  QrScanner.WORKER_PATH = QrScannerWorkerPath;

  // Get response
  React.useEffect(() => {
    props.onGetResponse(qrResponse);
    if (qrScanner) {
      qrScanner.stop();
    }
  }, [qrResponse, props, qrScanner]);

  // Set Scanner
  React.useEffect(() => {
    const video = cameraRef.current;
    if (video) {
      setQrScanner(new QrScanner(video, (result) => {
        setQrResponse(result);
      }, () => '', (video) => {
        const smallestDimension = Math.min(video.videoWidth, video.videoHeight);
        const scanRegionSize = Math.round(2 / 3 * smallestDimension);
        return {
          x: Math.round((video.videoWidth - scanRegionSize) / 2),
          y: Math.round((video.videoHeight - scanRegionSize) / 2),
          width: scanRegionSize,
          height: scanRegionSize,
          downScaledWidth: 300,
          downScaledHeight: 300,
        };
      },
      ));
    }
  }, [cameraRef]);

  // Start Scanner
  React.useEffect(() => {
    if (!qrScanner) return;
    qrScanner.start().then(() => {
      QrScanner.listCameras(false).then(((cameras) => setAvailableCameras(cameras)));
    });

    // @ts-ignore: canvas exist on QrScanner
    cameraRef?.current?.parentNode?.insertBefore(qrScanner.$canvas, cameraRef?.current?.nextSibling);

    // @ts-ignore: canvas exist on QrScanner
    qrScanner.$canvas.style.transform = 'scaleX(-1)';
  }, [qrScanner]);

  const handleClick = React.useCallback(() => {
    if (!qrScanner) return;
    const newFacingMode = facingMode === 'environment' ? 'user' : 'environment';

    if (newFacingMode === 'user') {
      // @ts-ignore: canvas exist on QrScanner
      qrScanner.$canvas.style.transform = 'scaleX(-1)';
    }

    qrScanner.setCamera(newFacingMode);
    setFacingMode(newFacingMode);
  }, [facingMode, qrScanner]);

  return (
    <Card className={mainClasses.card}>
      <CardContent className={classes.content}>
        <PhotoCameraIcon />
        <Typography variant='body1' color="primary" gutterBottom>
          {t('Start scanning')}
        </Typography>
      </CardContent>
      <div className={classes.borders}>
        <CardMedia component='video' ref={cameraRef} className={classes.video} />
        {availableCameras.length > 1 &&
          <FlipCameraIosIcon onClick={handleClick} className={classes.cameraFlip} />}
      </div>
    </Card>
  );
}

export default CameraCard;

