import {styled} from '@mui/system';

export const cardStyles ={
  backgroundColor: 'white',
  borderRadius: '0px',
  width: 'fit-content',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  maxWidth: {
    xs: '90%',
    sm: '70%',
    lg: '50%',
  },
  overflow: 'scroll',
  marginBottom: '10px',
};

export const BoxStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '100vh',
});
