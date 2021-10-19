import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../css/loading.css'

  

export default function Progress() {
 

    return (
      <Dialog
     open={true}
    
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
        <div    className='loader_warper'>
      <CircularProgress className='progress' />
      <h3 style={{zIndex:'1000',color:'#acadaf'}}>This might take few minutes</h3>
    </div>
    </Dialog>
    )
}
