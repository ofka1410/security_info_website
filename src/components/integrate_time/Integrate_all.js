import React,{useContext} from 'react'
import { Fragment } from 'react'
import {context} from '../../UseContext'
import '../../css/landingPage.css'
import AlertDialog from '../main/Error'
import Button from '@material-ui/core/Button';
export default function Integrate_all() {
    const {setDomain,integrate_ohad,domain}= useContext(context)
    return (
        <Fragment>
        <div className='input-warper'>
        <div className='warper-small'>
        <div style={{width:'80%'}}>
           <input value={domain} className='domain-input' onChange={(e)=>{setDomain(e.target.value)}}/>
        </div>
      
        <div style={{width:'20%',height:'100%'}} >
         <Button variant='outlined' className='button-input' onClick={integrate_ohad}>Search</Button>
        </div>
        </div>
        
        </div>  
        <AlertDialog/>
        </Fragment>
    )
}
