import React,{useContext,useEffect,useState} from 'react'
import { makeStyles, Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem,ListItemIcon,ListItemText,Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import '../../css/github.css'
import Dashboard_back from '../Dashboard_back'
import {context} from '../../UseContext'
import Email from './Sub_emails/Email'
import '../../css/github.css'
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
       console.log(mailShow)
    
     }, [])


const email_choose = (objects)=>{


}

    return (
               <Grid style={{width:'90%',display:'flex',justifyContent:'left'}}>
      
  
       
        <Grid xs={6}>
         {Object.keys(mailShow).map(function(keyName, keyIndex){
   return(
     <>
     {
       email== mailShow[keyName]?
         <List className='same-value'>
            <ListItem button onClick={()=>{setEmail(mailShow[keyName])}} >
           <a  className='same-value'    exact
            activeClassName="link--active">{keyName}</a>
            </ListItem>
          <Divider style={{color:'black'}}/>
        </List>

    : <List className='sub-nav-links'>
            <ListItem button onClick={()=>{setEmail(mailShow[keyName])}} >
           <a  className='nav_link'    exact
            activeClassName="link--active">{keyName}</a>
            </ListItem>
          <Divider style={{color:'black'}}/>
        </List> }
     </>
     
     
   )
 })}
      
</Grid>
        <Divider />
    
    
     
      
<Email email={email}/>

      
    </Grid>
        
             
    )
}
