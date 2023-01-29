import React from 'react';

import {BoxStyled} from '../styles';
import CameraCard from './CameraCard';

interface ScanProps {
  handleResponse: (response: string) => void
}

function Scan({handleResponse}: ScanProps): JSX.Element {
  return (
    <BoxStyled>
      <CameraCard handleResponse={handleResponse}/>
    </BoxStyled>
  );
}

export default Scan;
