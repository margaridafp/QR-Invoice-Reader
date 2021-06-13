import {makeStyles} from '@material-ui/core';

export const styles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0px',
    width: 'fit-content',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  },
});
