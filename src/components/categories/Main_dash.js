import React,{useContext} from 'react'
import {context} from '../../UseContext'
import {Grid,Container,Typography,Divider,} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
export default function Main_dash() {
    const {results,gitrepo,gitpass,gitoken,gitkey,mailShow,allip,records,
    domain,subdomain,data_res,setOpenDialog,openDialog,txt_rec,ns_rec,mx_rec,a_rec}= useContext(context)
    return (
        <Grid  style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%'}}>
         
         
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
       <Grid className='git-headers-warper'>
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
      
      </Grid>
      
      <Grid className='git-warper' xs={2}> 
      
      <Grid>
      <Typography style={{color:'#7a7d80'}} variant='h5'>
      Git Repository
      </Typography>
      </Grid>
      <Grid className='git-headers-warper'>
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
    
      
      
      </Grid>
      
      
      
      <Grid className='git-warper' xs={2}> 
      
      <Grid>
      <Typography style={{color:'#7a7d80'}} variant='h5'>
      Git Pass
      </Typography>
      </Grid>
      <Grid className='git-headers-warper'>
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
      
      </Grid>
      
      <Grid  xs={2}> 
      
      <Grid>
      <Typography style={{color:'#7a7d80'}} variant='h5'>
      Git Token
      </Typography>
      </Grid>
       <Grid className='git-headers-warper'>
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
         <NavLink to='/'  onClick={()=>{setOpenDialog(true)}} className='nav_link'    exact
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
            <a href={keyName} style={{color:'#c6d8f5' , fontSize:"16px",fontWeight:'700'}}>{keyName}</a>
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
      <Grid style={{height:'150px',textAlign:'left',marginLeft:'30px'}}>
      {
txt_rec.slice(-1).map(el=>{
return(
  <Grid>
 <Grid>
  <Typography   variant="p" component="h2">
     <a className='links records'  href={el}><span className='span-rec'>Text_reords:</span> {el}</a>
       </Typography> 
                        
   </Grid>
  </Grid>
)
})
      }
      {
ns_rec.slice(-1).map(el=>{
  return(
  <Grid>
 <Grid>
  <Typography   variant="p" component="h2">
     <a className='links records'  href={el}> <span className='span-rec'>NS_reords:</span> {el}</a>
       </Typography> 
                        
   </Grid>
  </Grid>
)
})
      }
      {
mx_rec.slice(-1).map(el=>{
  return(
  <Grid>
 <Grid>
  <Typography   variant="p" component="h2">
     <a className='links records'  href={el}> <span className='span-rec'>MX_reords:</span> {el}</a>
       </Typography> 
                        
   </Grid>
  </Grid>
)
})
      }
      {

a_rec.slice(-1).map(el=>{
  return(
  <Grid>
 <Grid>
  <Typography   variant="p" component="h2">
     <a className='links records'  href={el}><span className='span-rec'>A_records:</span> {el}</a>
       </Typography> 
                        
   </Grid>
  </Grid>
)
})
      }
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
            <a href={keyName} style={{color:'#c6d8f5' , fontSize:"16px",fontWeight:'700'}}>{keyName}</a>
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
    )
}
