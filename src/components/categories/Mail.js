import React,{useContext,useEffect,useState} from 'react'
import { makeStyles, Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem,ListItemIcon,ListItemText,Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import '../../css/github.css'
import Dashboard_back from '../Dashboard_back'
import {context} from '../../UseContext'
import Email from './Sub_emails/Email'
const drawerWidth = 240;

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
   
    padding: theme.spacing(3),
    height:"100vh"
  
  },
}));
export default function Mail() {
    const classes = useStyles();
    const[email,setEmail]=useState([])
     const {mailShow}= useContext(context)

     useEffect(() => {
    for (const key in mailShow) {
      console.log(key)
    console.log(mailShow[key]);
}
    
     }, [])


const email_choose = (objects)=>{
setEmail(objects)
console.log(email)
}

    return (
               <div>
          <div style={{backgroundColor: '#8c8e91'}} className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <Typography variant="h5" noWrap>
          Emails  <span></span>
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
         {Object.keys(mailShow).map(function(keyName, keyIndex){
   return(
     <Grid>
     <Button onClick={()=>{email_choose(mailShow[keyName])}} style={{color:'white' , fontSize:"16px",variant:"outlined"}}>{keyName}</Button>
       <Divider />
     </Grid>
     
   )
 })}
      

        <Divider />
    
    
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
<Email email={email}/>

      </main>
    </div>
        
         
              
        </div>
    )
}
