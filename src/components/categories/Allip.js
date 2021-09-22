import React,{useContext,useEffect} from 'react'
import { makeStyles, Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem,ListItemIcon,ListItemText,ListItemAvatar,Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import '../../css/github.css'
import Dashboard_back from '../Dashboard_back'
import {context} from '../../UseContext'
import Side_icons from '../Side_icons'

import '../../css/landingPage.css'
const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:"#2c3138",
     display:'flex',
    justifyContent:'space-bitween'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#2c3138",
    textAlign:'center'


  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:'#8c8e91',
   
    height:"100%",

  
  },
}));

export default function Allip() {
    const classes = useStyles();
      const {allip,domain}= useContext(context)
    return (
               <div>
          <div style={{backgroundColor: '#8c8e91'}} className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <Typography variant="h5" noWrap>
           Allip  <span></span>
          </Typography>
        </div>
          <Dashboard_back/>
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
        <div className={classes.toolbar} />
     <div style={{height:'70%'}}></div>
     <Side_icons/>
     
       
    
    
      </Drawer>
      <main className={classes.content}>
     
      
      
        <div className={classes.toolbar} />
        <div style={{width:'1000px',textAlign:'left'}} className='git-paper'>
        <h1 style={{color:'#4d4e4f'}}>All IP</h1>
        <List sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
        <Divider/>
   {allip.map(el=>{
     return(
       <>
      <ListItem stayle={{margin:'20px'}}>
        <ListItemAvatar>
          <Avatar >
           
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color:'#4d4e4f'}} primary={el} secondary="IP" />
     
       </ListItem>
       <Divider/>
       </>
     )
   })}
   </List>
   </div>
      </main>
    </div>
        
         
              
        </div>
    )
}
