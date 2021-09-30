import React,{useContext,useEffect,useState} from 'react'

import { makeStyles, Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import Dashboard_back from '../Dashboard_back'
import {context} from '../../UseContext'

import { Grid } from '@material-ui/core';
import '../../css/github.css'
import Side_icons from '../Side_icons';


const drawerWidth = 170;

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
    
  
  },
}));

export default function Github() {
     const classes = useStyles();
     const[git_now,setGit_now]=useState([])
     const[title,setTitle]=useState('')
     
     const {gitrepo,gitpass,gitoken,gitkey}= useContext(context)

     const change_context=(content,title)=>{
      setGit_now(content)
      setTitle(title)
      
     }

useEffect(() => {
    console.log(gitoken,gitrepo,gitkey)
}, [])

    return (
        <div>
       
        <List className='sub-nav-links'>
            <ListItem button >
           <a onClick={()=>{change_context(gitrepo,'Git Repository')}} className='nav_link'    exact
            activeClassName="link--active">Git Repository</a>
            </ListItem>
          
        </List>
        <Divider />
           <List className='sub-nav-links'>
            <ListItem button >
             <a onClick={()=>{change_context(gitpass,'Git Pass')}} className='nav_link'    exact
            activeClassName="navbar__link--active"  >Git pass </a>
            </ListItem>
           
        </List>
        <Divider />
           <List className='sub-nav-links'>
            <ListItem button >
               <a onClick={()=>{change_context(gitoken,'Git Token')}} className='nav_link'    exact
            activeClassName="navbar__link--active" >Git Tokens </a>
            </ListItem>
         
        </List>
        <Divider />
             <List className='sub-nav-links'>
            <ListItem button >
             <a onClick={()=>{change_context(gitkey,'Git Key')}} className='nav_link'    exact
            activeClassName="navbar__link--active" > Git Keys</a>
            </ListItem>
          
        </List>
        <Divider />
    
      

      <div className='git-paper'>
      <h1 style={{color:'#4d4e4f'}}>{title}</h1> 
       {
         git_now.length>0?
    
     
         git_now.map(item=>{
                  return(
                      
                     <Grid className='list-grid'>
                      <Typography style={{color:'#637296'}} className='git-headers' variant="p" component="p">
                        <a tyle={{color:'#637296',marginBottom:'10px',fontWeight:'700',textDecoration:'none'}} href={item}>{item}</a>
                      </Typography> 
                     </Grid>
 
                )
              })
       
       :<h2 style={{color:'#4d4e4f'}}>Choose one of the results </h2>}
           </div>  
      
    </div>
        
         
              
       
    )
}
