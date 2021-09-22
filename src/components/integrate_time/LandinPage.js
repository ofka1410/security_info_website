import React from 'react'
import { Fragment } from 'react'
import '../../css/landingPage.css'
import Integrate_all from './Integrate_all'
import { Grid,Divider } from '@material-ui/core';
import Header from '../headers/Header'
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import Side_icons from '../Side_icons'
export default function LandinPage() {
    return (
 <Grid className='landing-warper'>
 <Grid  xs={12}>
<Header/>
  </Grid>
   <Grid style={{display:'flex'}}>
  <Grid className='side' xs={1}>
 <Side_icons/>

  </Grid>
    <Grid xs={11}>
    <div className='integrate-warper'>
    <Integrate_all/>
    </div>


  </Grid>

  </Grid>

 </Grid>
          

   
    )
}
