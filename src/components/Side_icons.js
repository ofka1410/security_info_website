import React,{useContext,useState} from 'react'
import { Grid,Divider,IconButton } from '@material-ui/core';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {context} from '../UseContext'
import SearchPage from './SearchPage'
export default function Side_icons() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

 const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

     const {setIsDomain}= useContext(context)

    return (
        <Grid>
      
         <Grid style={{marginTop:'20px'}}>
          <SearchPage  
          />
          
          </Grid>
<Divider />
<Grid style={{marginTop:'10px'}}>
 <IconButton onClick={()=>{setIsDomain(false)}}>
< ReplyOutlinedIcon
 aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
 className='header-icon'/>
  </IconButton>
</Grid>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Logout</Typography>
      </Popover>


</Grid>
    )
}
