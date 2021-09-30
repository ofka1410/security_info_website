import React,{useContext} from 'react'
import { Grid,Divider,IconButton } from '@material-ui/core'; 
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { BsFunnel } from 'react-icons/bs';
import {context} from '../UseContext'
import {NavLink , BrowserRouter as Router} from "react-router-dom";
export default function SearchPage() {
 const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
    const {results,gitrepo,gitpass,gitoken,gitkey,mailShow,allip,records,setIsDomain,
    domain,subdomain,data_res,setOpenDialog,openDialog,txt_rec,ns_rec,mx_rec,a_rec}= useContext(context)
    return (
        <Router>
         <NavLink exact
            to='sort'>
      
        <IconButton aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
           <BsFunnel className='header-icon'/>
           </IconButton>
            </NavLink>
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
        <Typography sx={{ p: 1 }}>Sort/Search</Typography>
      </Popover>
      </Router>
      
    )
}
