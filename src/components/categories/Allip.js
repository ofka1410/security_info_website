import React,{useContext,useEffect} from 'react'
import { makeStyles,
List,Typography,Divider,ListItem,ListItemIcon,ListItemText,ListItemAvatar,Avatar,Dialog } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import '../../css/github.css'
import {context} from '../../UseContext'


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
      const {allip,domain,openDialog,setOpenDialog}= useContext(context)

      const handleClose =()=>{
        setOpenDialog(false)
      }
      
    return (
             
      
      <Dialog  open={openDialog} onClose={handleClose}>
    
        <h1 style={{color:'#4d4e4f'}}>All IP</h1>
        <List style={{ width: '500px', maxWidth: 660, bgcolor: 'background.paper' }}>
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
    
      </Dialog>
       
    
    
      
     
      
      
       
    )
}
