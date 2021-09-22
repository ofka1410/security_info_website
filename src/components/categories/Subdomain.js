import React,{useEffect,useContext,useState} from 'react'
import { makeStyles, Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import '../../css/github.css'
import Dashboard_back from '../Dashboard_back'
import {context} from '../../UseContext' 
import Side_icons from '../Side_icons';
const drawerWidth = 200;

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
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    height:"100vh",
    marginBottom:'30px'
  
  },
}));

export default function Subdomain() {
  const {subdomain}= useContext(context)
  const[git_now,setGit_now]=useState([])
     const[title,setTitle]=useState('')
    const classes = useStyles();

    const change_context=(content,title)=>{
      setGit_now(content)
      setTitle(title)
      console.log(content,title,content.value)
      
     }


    return (
             <div>
          <div style={{backgroundColor: '#8c8e91'}} className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <Typography variant="h5" noWrap>
          Subdomain <span></span>
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
       
        {Object.keys(subdomain).map(function(keyName){
   return(
     <>
     <Divider/>
    <List className='sub-nav-links'>
    <ListItem button >
   <a style={{fontSize:'16px'}} onClick={()=>{change_context(subdomain[keyName],keyName)}} className='nav_link'    exact
    activeClassName="navbar__link--active">{keyName}</a>
    </ListItem>
    
</List>
<Divider/>
</> 
   )
 })}
 
    <Side_icons/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{width:'1000px',textAlign:'left'}} className='git-paper'>

   {
         git_now.length>0?
         <>
      <Grid>
      <h1 style={{color:'#4d4e4f'}}>{title}</h1>
      </Grid>
      <Grid>
      <h2 style={{color:'#7f96ad'}}>IP:  <span style={{color:'#4d4e4f'}}>{git_now[0].ip}</span></h2>
      <Divider/>
      </Grid>
        {git_now.map(item=>{
          return(
            <>
            <Divider/>
            <Grid style={{display:'flex',alignItems:'center'}} >
              
         <h3 style={{color:'#7f96ad'}}>Open Port:  </h3><span style={{fontSize:'18px',color:'#4d4e4f',marginLeft:'15px',fontWeight:'800'}}>{item.port}</span>
    
            </Grid>
                 <Divider/>
                 </>
          )
        })}
        </>
   :<h2 style={{color:'#4d4e4f'}}>Choose one of the results on the side bar</h2>}
     </div>
      </main>
    </div>
        
         
              
        </div>
    )
}
