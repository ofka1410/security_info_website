import React,{useContext} from 'react'
import { Grid,Divider,IconButton } from '@material-ui/core';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import {context} from '../UseContext'
export default function Side_icons() {

     const {setIsDomain}= useContext(context)

    return (
        <Grid>
      
         <Grid style={{marginTop:'25px'}}>
           <Divider />
           <HighlightOutlinedIcon className='header-icon'/>
          </Grid>
<Divider />
<Grid style={{marginTop:'10px'}}>
 <IconButton onClick={()=>{setIsDomain(false)}}>
< ReplyOutlinedIcon className='header-icon'/>
  </IconButton>
</Grid>
<Divider />
</Grid>
    )
}
