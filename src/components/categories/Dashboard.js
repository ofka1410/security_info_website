import React,{useContext} from 'react'
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Container,Popover} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import {context} from '../../UseContext'
import DashboardIcon from '@material-ui/icons/Dashboard';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import '../../css/landingPage.css'
import { Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem} from '@material-ui/core';
import Side_icons from '../Side_icons'
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { FcDataConfiguration } from 'react-icons/fc';
import Allip from './Allip'
import '../../css/main.css'
import Main_dash from './Main_dash';
import Mail from '../categories/Mail'
import Github from '../categories/Github'
import Records from '../categories/Records'
import Subdomain from '../categories/Subdomain'
import Sort from './Sort'


import Data from '../categories/Data'
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
const drawerWidth = 80;

const useStyles = makeStyles({
    card: {
      maxWidth: 275,
     margin:'20px',
      height:'150px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    root: {
    display: 'flex',
   
        
   
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:"#2c3138",

  },
  toolbar:{
    marginTop:'50px'
  },
  drawer: {
    width: 220,
    flexShrink: 10,
    backgroundColor:'#acadaf',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#2c3138",
    textAlign:'center'


  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  
    backgroundColor:'#acadaf',
    width:'100%',
    
    justifyContent:'center'
  
  },
  });

export default function Dashboard() {
  
     const [anchorEl, setAnchorEl] = React.useState(null);
     const [popValue, setPopValue] = React.useState('');
    const {results,setOpenDialog,openDialog}= useContext(context)
    const classes = useStyles();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget); 
    };
  
    const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
   
    
    return (
      <Router>
      <Container >
         <div>
          <div style={{backgroundColor: '#8c8e91'}} className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
       
          <Typography variant="h5" noWrap>
           <NavLink className='nav-icon' exact to='/'>
         Dashboard <span>< DashboardIcon/></span>
          </NavLink>
          </Typography>  
         
                 <div style={{marginLeft:'5px',marginTop:'5px'}} className='flex-div'>
           <div>
           <VpnLockIcon className='header-icon'/>
           </div>
          
            <div>
            <h3>Logo</h3>
           </div>

           </div>
            
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
       <Divider />
        <div className={classes.toolbar} />
         {
             results.length?
             
                results.map(el=>{
                return(
                  <>
              <>
                <List className='nav_link'  style={{height:'65px',width:'100%'}}>
            <ListItem button >
            {el.name== 'Allip'?
           
               <NavLink aria-owns={open ? 'mouse-over-popover' : undefined}
               onMouseEnter={handleClick} className='nav_link'    exact
               activeClassName="navbar__link--active" onClick={()=>{setOpenDialog(true)}}  to={'/'}>{el.name}</NavLink>
            
           
               :el.name=='Github'?

               <NavLink aria-owns={open ? 'mouse-over-popover' : undefined}
               className='nav_link'  onMouseEnter={()=>{handleClick(el.name)}}   exact
              activeClassName="navbar__link--active"  to={el.path}><GitHubIcon className='nav-icon'/></NavLink>
              
              :el.name == 'Emails'?

              <NavLink aria-owns={open ? 'mouse-over-popover' : undefined}
              onMouseEnter={()=>{handleClick(el.name)}} className='nav_link'    exact
              activeClassName="navbar__link--active"  to={el.path}><MailOutlineIcon className='nav-icon'/></NavLink>

            :el.name == 'Subdomains'? 

            <NavLink aria-owns={open ? 'mouse-over-popover' : undefined}
            onMouseEnter={()=>{handleClick(el.name)}} className='nav_link'    exact
            activeClassName="navbar__link--active"  to={el.path}><HttpIcon className='nav-icon' /></NavLink>

          :el.name=='Records'?

          <NavLink aria-owns={open ? 'mouse-over-popover' : undefined}
          onMouseEnter={()=>{handleClick(el.name)}} className='nav_link'    exact
          activeClassName="navbar__link--active"  to={el.path}><img
          className='nav-icon' 
           src='https://res.cloudinary.com/df2pklfox/image/upload/v1632391274/dik2kyy9o5yiqcv7zalt.png'/></NavLink>

        :el.name =='Data'?
        <NavLink aria-owns={open ? 'mouse-over-popover' : undefined}
        onMouseEnter={()=>{handleClick(el.name)}}  className='nav_link'    exact
        activeClassName="navbar__link--active"  to={el.path}><FcDataConfiguration className='nav-icon'/></NavLink>

      :
      <NavLink aria-owns={open ? 'mouse-over-popover' : undefined}
 onMouseEnter={()=>{handleClick(el.name)}}  className='nav_link'    exact
        activeClassName="navbar__link--active"  to={el.path}>{el.name}</NavLink>}
               </ListItem>
           </List>
          
           <Divider/>
           
           </>
         
        
          <Divider/>
         
        </>
              
                )
                })
             
         :<Fragment></Fragment>}

    <Side_icons/>

    
      </Drawer>
      <main className={classes.content}>
              
   
        
        {
          openDialog?
          <Allip/>
        :<></>}
        <div className={classes.toolbar} />
        <div className='main-warper'>
             
                 <Switch>
                 <Route path='/mailshow'>
                     <Mail/>
                 </Route>
                 <Route path='/github'>
                     <Github/>
                 </Route>
                 <Route path='/records'>
                     <Records/>
                 </Route>
                 <Route path='/subdomain'>
                     <Subdomain/>
                 </Route>
                 <Route path='/allip'>
                     <Allip/>
                 </Route>
                 <Route path='/data'>
                     <Data/>
                 </Route>
                    <Route path='/sort'>
               <Sort/>
                 </Route>
                 <Route path='/'>
                     <Main_dash/>
                 </Route>

              
                 
                 
                 </Switch>
             
</div>
        
        
      </main>
    </div>
        
         
              
        </div>
      
       </Container>
       </Router>
    )
}
