import React from 'react'
import { Fragment } from 'react'
import '../../css/landingPage.css'
import Integrate_all from './Integrate_all'
import { Grid,Divider } from '@material-ui/core';
import Header from '../headers/Header'
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
// import Side_icons from '../Side_icons'

export default function LandinPage() {
    return (
 <Grid className='landing-warper'>
 <Grid  xs={12}>
<Header/>
  </Grid>
   <Grid style={{display:'flex'}}>
  <Grid className='side' >
 {/* <Side_icons/> */}

  </Grid>
    <Grid xs={12}>
    <div className='integrate-warper'>
    <Integrate_all/>
    </div>
<Grid xs={12} className='landing'>
  <Grid className='Text-landing' xs={3}>
   <Grid className='cmd-warper'>
   <p style={{color:'black',marginLeft:'7px',paddingTop:'4px'}}>Program Documents:</p>
   </Grid>
   <Grid>
   <p className='doc-area'>
   It is a long established fact that a reader will be distracted by the readable content of a page when looking
    at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
    as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
   </p>
   </Grid>
  </Grid>
  </Grid>
  </Grid>

  </Grid>

 </Grid>
          

   
    )
}
