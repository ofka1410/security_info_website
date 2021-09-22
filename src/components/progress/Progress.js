import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import '../../css/loading.css'

  

export default function Progress() {
 

    return (
        <div className='loader_warper'>
      <CircularProgress className='progress' />
    </div>
    )
}
