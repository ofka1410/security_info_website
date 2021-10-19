import React,{useContext} from 'react'
import { Grid,Divider,IconButton } from '@material-ui/core'; 
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import {context} from '../UseContext'
import {NavLink , BrowserRouter as Router,Link} from "react-router-dom";
export default function SearchPage() {
 const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
   
    return (
        
      //    <Link exact
      //       to='/sort'>
      
      //   <IconButton aria-owns={open ? 'mouse-over-popover' : undefined}
      //   aria-haspopup="true"
      //   onMouseEnter={handlePopoverOpen}
      //   onMouseLeave={handlePopoverClose}>
      //      <BsFunnel className='header-icon'/>
      //      </IconButton>
      //       </Link>
      //      <Popover
      //   id="mouse-over-popover"
      //   sx={{
      //     pointerEvents: 'none',
      //   }}
      //   open={open}
      //   anchorEl={anchorEl}
      //   anchorOrigin={{
      //     vertical: 'bottom',
      //     horizontal: 'left',
      //   }}
      //   transformOrigin={{
      //     vertical: 'top',
      //     horizontal: 'left',
      //   }}
      //   onClose={handlePopoverClose}
      //   disableRestoreFocus
      // >
      //   <Typography sx={{ p: 1 }}>Sort/Search</Typography>
      // </Popover>
    <></>
      
    )
}


//github
//https://raw.githubusercontent.com/Rs1da/Test/06998e9137ff178b507fa58b7e487733c8de79df/Buyme/www.mysodexo.co.il/index.html


//ip /data
//


//email
//info@buyme.co.il


//records

//Text
//ns-318.awsdns-39.com.

//ns
//ns-1379.awsdns-44.org.

//a
//45.60.153.141

//mx
//30 aspmx3.googlemail.com.