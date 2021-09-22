import React,{useContext} from 'react'
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Container} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import {context} from '../../UseContext'
import DashboardIcon from '@material-ui/icons/Dashboard';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import '../../css/landingPage.css'
import { Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider,ListItem} from '@material-ui/core';
import Side_icons from '../Side_icons'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import '../../css/main.css'
const drawerWidth = 180;

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
    marginTop:'60px'
  },
  drawer: {
    width: 220,
    flexShrink: 10,
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
    height:"100vh",
    backgroundColor:'#8c8e91',
    width:'100%',
    
    justifyContent:'center'
  
  },
  });

export default function Dashboard() {
    const {results,gitrepo,gitpass,gitoken,gitkey,mailShow,allip,records,domain,subdomain,data_res}= useContext(context)
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    return (
      <Container >
         <div>
          <div style={{backgroundColor: '#8c8e91'}} className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
          <Typography variant="h5" noWrap>
          
         Dashboard <span>< DashboardIcon/></span>
          </Typography>
                 <div style={{marginLeft:'5px'}} className='flex-div'>
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
                <List>
            <ListItem button >
           <NavLink  className='nav_link'    exact
            activeClassName="navbar__link--active"  to={el.path}>{el.name}</NavLink>
            </ListItem>
        </List>
        <Divider/>
        </>
              
                )
                })
             
         :<Fragment></Fragment>}
      
    
    <Side_icons/>

    
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         <Grid  style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'10%'}}>
         
         
  <Grid  style={{marginTop:'10px',display:'flex',justifyContent:'center'}} xs={12}>
          <Grid className='dash-box' style={{backgroundColor:'#e6ecf5',height:'280px'}} xs={12}>
          <Grid>
<Typography style={{color:'#7a7d80'}}  variant='h4'>
Github
</Typography>
<Divider/>
</Grid>


 <Grid xs={12} container spacing={2} style={{height:'210px',display:'flex',justifyContent:'center',marginTop:'5px'}}>

<Grid  className='dash-box' className='git-warper' xs={2}> 

<Grid>
<Typography style={{color:'#7a7d80'}} variant='h5'>
Git Keys
</Typography>
</Grid>
 { gitkey.splice(-1).map(item=>{
                 return(
                     
                    <Grid>
                     <Typography style={{ width:'140px'}}  variant="p" component="h2">
                       <a className='links'  href={item}>{item}</a>
                     </Typography> 
                  
                    </Grid>

               )
             })}


</Grid>

<Grid className='git-warper' xs={2}> 

<Grid>
<Typography style={{color:'#7a7d80'}} variant='h5'>
Git Repository
</Typography>
</Grid>
 { gitrepo.splice(-1).map(item=>{
                 return(
                     
                    <Grid>
                     <Typography style={{ width:'140px'}}  variant="p" component="h2">
                       <a className='links'  href={item}>{item}</a>
                     </Typography> 
                   
                    </Grid>

               )
             })}


</Grid>



<Grid className='git-warper' xs={2}> 

<Grid>
<Typography style={{color:'#7a7d80'}} variant='h5'>
Git Pass
</Typography>
</Grid>
 { gitpass.splice(-1).map(item=>{
                 return(
                     
                    <Grid>
                     <Typography style={{ width:'140px'}}  variant="p" component="h2">
                       <a className='links'  href={item}>{item}</a>
                     </Typography> 
                  
                    </Grid>

               )
             })}


</Grid>

<Grid  xs={2}> 

<Grid>
<Typography style={{color:'#7a7d80'}} variant='h5'>
Git Token
</Typography>
</Grid>
 { gitoken.splice(-1).map(item=>{
                 return(
                     
                    <Grid>
                     <Typography style={{width:'140px'}}  variant="p" component="h2">
                       <a className='links'  href={item}>{item}</a>
                     </Typography> 
                  
                    </Grid>

               )
             })}


</Grid>

</Grid>


 <Grid className='forward-warper'>
   <NavLink to='github' className='nav_link'    exact
            activeClassName="navbar__link--active"><ExpandMoreOutlinedIcon  style={{color:'black',cursor:'pointer',fontWeight:'bold'}}/></NavLink>
 
 </Grid>
 
              </Grid>
            
            </Grid>
           <Grid style={{marginTop:'30px',display:'flex',justifyContent:'space-evenly'}} xs={12}>

   <Grid  className='dash-box' style={{backgroundColor:'#e6ecf5',height:'220px'}} xs={3}>
   <Grid>
<Typography style={{color:'#4d4e4f'}} variant='h4'>
Allip
</Typography>
</Grid>
<Grid style={{height:'140px'}}>
{allip.slice(-4).map(el=>{
  return(
    <Grid>
      <p  style={{  fontSize:"14px",color:'#7a7d80',fontWeight:'700'}}>{el}</p>
     </Grid>
  )
  
})}
</Grid>
<Grid className='forward-warper'>
   <NavLink to='allip' className='nav_link'    exact
            activeClassName="navbar__link--active"><ExpandMoreOutlinedIcon style={{color:'black',cursor:'pointer',fontWeight:'bold'}}/></NavLink>
 
 </Grid>
    </Grid>

 <Grid  className='dash-box' style={{backgroundColor:'#626e80',height:'220px',}} xs={4}>
<Grid>
<Typography  variant='h4'>
Data
</Typography>
</Grid>
<Grid style={{height:'150px'}}>
  {Object.keys(data_res).slice(-6).map(function(keyName, keyIndex){
   return(
     <Grid style={{display:'flex',justifyContent:'center'}}>
     <Grid>
      <Grid style={{marginTop:'7px'}}>
      <a href={keyName} style={{color:'#e0fbff' , fontSize:"16px",fontWeight:'700'}}>{keyName}</a>
     </Grid>
     </Grid>
    
       <Divider />
     </Grid>
     
   )
 })}
</Grid>
<Grid className='forward-warper'>
   <NavLink to='data' className='nav_link'    exact
            activeClassName="navbar__link--active"><ExpandMoreOutlinedIcon style={{color:'black',cursor:'pointer',fontWeight:'bold'}}/></NavLink>
 
 </Grid>
    </Grid>
    <Grid  className='dash-box' style={{backgroundColor:'#a3a7ad',height:'220px'}} xs={4}>
<Grid>
<Typography  variant='h4'>
Records
</Typography>
</Grid>
<Grid style={{height:'150px'}}>
</Grid>
<Grid className='forward-warper'>
   <NavLink to='records' className='nav_link'    exact
            activeClassName="navbar__link--active"><ExpandMoreOutlinedIcon style={{color:'black',cursor:'pointer',fontWeight:'bold'}}/></NavLink>
 
 </Grid>
    </Grid>

            </Grid>
             <Grid style={{marginTop:'30px',display:'flex',justifyContent:'space-evenly',marginBottom:'30px'}} xs={12}>
         
          <Grid  className='dash-box' style={{backgroundColor:'#6f88ad',height:'220px'}} xs={7}>
<Grid>
<Typography  variant='h4'>
Emails
</Typography>
</Grid>
<Grid style={{height:'150px'}}>

   {Object.keys(mailShow).slice(-6).map(function(keyName, keyIndex){
   return(
     <Grid style={{display:'flex',justifyContent:'center'}}>
     <Grid>
      <Grid style={{marginTop:'7px'}}>
      <a href={keyName} style={{color:'#e0fbff' , fontSize:"16px",fontWeight:'700'}}>{keyName}</a>
     </Grid>
     </Grid>
    
       <Divider />
     </Grid>
     
   )
 })}
 </Grid>
<Grid className='forward-warper'>
   <NavLink to='mailshow' className='nav_link'    exact
            activeClassName="navbar__link--active"><ExpandMoreOutlinedIcon style={{color:'black',cursor:'pointer',fontWeight:'bold'}}/></NavLink>
 
 </Grid>
              </Grid>

             <Grid  className='dash-box' style={{backgroundColor:'#dcdfe3',height:'220px'}} xs={4}>
<Grid>
<Typography style={{color:'#4d4e4f'}}  variant='h4'>
Subdomains
</Typography>
</Grid>
<Grid style={{height:'150px'}}>
  {Object.keys(subdomain).slice(-6).map(function(keyName, keyIndex){
   return(
     <Grid style={{display:'flex',justifyContent:'center'}}>
     <Grid>
      <Grid style={{marginTop:'7px'}}>
      <a href={keyName} style={{color:'#7f96ad' , fontSize:"16px",fontWeight:'700'}}>{keyName}</a>
     </Grid>
     </Grid>
    
       <Divider />
     </Grid>
     
   )
 })}
</Grid>
<Grid className='forward-warper'>
   <NavLink to='subdomain' className='nav_link'    exact
            activeClassName="navbar__link--active"><ExpandMoreOutlinedIcon style={{color:'black',cursor:'pointer',fontWeight:'bold'}}/></NavLink>
 
 </Grid>
              </Grid>


            </Grid>
           
         </Grid>
      </main>
    </div>
        
         
              
        </div>
      
       </Container>
    )
}
