import React,{useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {context} from '../../UseContext'
import '../../css/Error.css'

export default function AlertDialog() {
 
    const {setOpen,open}= useContext(context)

  return (
    <div>
    
      <Dialog
     
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <div className='error-warper'>
          <DialogTitle id="alert-dialog-title">{"Domain is not correct or error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Please try to enter your domain again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={()=>{setOpen(false)}} color="primary">
           Go back
          </Button>
     
        </DialogActions>
          </div>
        
      </Dialog>
    </div>
  );
}