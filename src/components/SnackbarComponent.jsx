import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarComponent = ({
  open,
  autoHide,
  text,
  success,
  close
}) => {
  return (
    <Snackbar 
    open={open} 
    autoHideDuration={autoHide} 
    onClose={close} 
    >
      <Alert severity={success ? "success" : "error"}>
        {text}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarComponent
