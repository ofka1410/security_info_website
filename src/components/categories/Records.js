import React,{useContext,useEffect} from 'react'
import { makeStyles, Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import '../../css/github.css'
import Dashboard_back from '../Dashboard_back'
import {context} from '../../UseContext'

const drawerWidth = 300;

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
   
    textAlign:'center'


  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:'rgb(1, 29, 41)',
    padding: theme.spacing(3),
   
  
  },
}));

export default function Records() {
   const {records}= useContext(context)
    const classes = useStyles();

    useEffect(() => {
     console.log(records)
    }, [])
    return (
    
        <div>
          <div style={{backgroundColor: '#8c8e91'}} className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <Typography variant="h5" noWrap>
          Records  <span></span>
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
        <Divider />

        <Divider />
    
    
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
   {
     records.map(el=>{
     
         return(
        <h7 style={{color:'white'}}>{el}</h7>
         )
         
})}
      </main>
    </div>
        
         
              
        </div>
    )
}
