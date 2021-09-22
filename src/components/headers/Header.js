import React from 'react'
import '../../css/landingPage.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnLockIcon from '@material-ui/icons/VpnLock';
export default function Header() {
    return (
        <div className='header-warper'>
           <div style={{marginLeft:'5px'}} className='flex-div'>
           <div>
           <VpnLockIcon className='header-icon'/>
           </div>
            <div>
            <h3>Logo</h3>
           </div>
 
           </div>
             <div  style={{marginRight:'20px'}}  className='flex-div'>
             <div>
 <AccountCircleIcon className='header-icon'/> 
             </div>
               <div>
               <h3>Company Name</h3>
             </div>
            
           </div>
        </div>
    )
}
