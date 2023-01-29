import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import {Card, CardContent, Typography} from '@mui/material';
import {styled} from '@mui/system';
import QrScanner from 'qr-scanner';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {cardStyles} from '../styles';

export const VideoStyled = styled('video')({
  width: '100%',
});

interface CameraCardProps {
  handleResponse: (response: string) => void
}

function CameraCard({handleResponse}: CameraCardProps): JSX.Element {
  const cameraRef = React.useRef<HTMLVideoElement>(null);
  const [qrResponse, setQrResponse] = React.useState<QrScanner.ScanResult|null>(null);
  const [qrScanner, setQrScanner] = React.useState<QrScanner | null>(null);
  const {t} = useTranslation();

  // Get response
  React.useEffect(() => {
    if (qrResponse) {
      if (qrScanner) {
        qrScanner.stop();
      }
      handleResponse(qrResponse.data);
    }
  }, [qrResponse, handleResponse, qrScanner]);

  // Set Scanner
  React.useEffect(() => {
    const video = cameraRef.current;
    if (video) {
      const qrScanner = new QrScanner(
          video,
          (result) => setQrResponse(result),
          {
            highlightScanRegion: true,
            highlightCodeOutline: true,
          },
      );
      setQrScanner(qrScanner);
    }
  }, [cameraRef]);

  // Start Scanner
  React.useEffect(() => {
    if (!qrScanner) return;
    qrScanner.start();
  }, [qrScanner]);

  return (
    <Card sx={cardStyles}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <PhotoCameraIcon />
        <Typography variant='body1' color="primary" gutterBottom>
          {t('Start scanning')}
        </Typography>
        <VideoStyled ref={cameraRef} />
      </CardContent>
    </Card>
  );
}

export default CameraCard;

