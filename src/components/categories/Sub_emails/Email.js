import React from 'react'
import { Grid,Divider } from '@material-ui/core';

export default function Email({email}) {
    console.log(email)
    return (
        <Grid  style={{textAlign:'center'}}  xs={6}>
           <Grid style={{width:'630px'}} className='git-paper'>
            {
                email.length>0?
                email.map(item=>{
                   return(
                       <div className='emails-results'>
                 <a href={Object.keys(item)} className='git-headers' style={{color:'#637296',marginBottom:'10px',fontWeight:'700'}}>{Object.keys(item)}</a>
                             
                       <Divider style={{marginTop:'10px'}}/>
                  </div>
                   )
               })
                
           :<h2 style={{color:'#7a7d80'}}>Choose one of the email address</h2> }
           </Grid>
        </Grid>
    )
}
