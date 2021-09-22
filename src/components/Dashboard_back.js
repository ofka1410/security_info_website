import React from 'react'
import {Button} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import {NavLink} from "react-router-dom";
export default function Dashboard_back() {
    return (
        <div>
          <NavLink  className='nav_link'    exact
            activeClassName="navbar__link--active"  to='/'> 
     <Button style={{color:'white'}}> Dashboard <span><DashboardIcon /></span></Button> 
     </NavLink>
     </div>
      
    )
}
