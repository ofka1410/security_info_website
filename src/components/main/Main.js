import React from 'react'
import '../../css/main.css'
import { Grid } from '@material-ui/core';
import Mail from '../categories/Mail'
import Github from '../categories/Github'
import Records from '../categories/Records'
import Subdomain from '../categories/Subdomain'
import Allip from '../categories/Allip'
import Data from '../categories/Data'
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import Dashboard from '../categories/Dashboard';

export default function Main() {
    return (
       
        <div className='main-warper'>
             <Router>
                 <Switch>
                 <Route path='/mailshow'>
                     <Mail/>
                 </Route>
                 <Route path='/github'>
                     <Github/>
                 </Route>
                 <Route path='/records'>
                     <Records/>
                 </Route>
                 <Route path='/subdomain'>
                     <Subdomain/>
                 </Route>
                 <Route path='/allip'>
                     <Allip/>
                 </Route>
                 <Route path='/data'>
                     <Data/>
                 </Route>
                 <Route path='/'>
                     <Dashboard/>
                 </Route>
                 
                 </Switch>
             </Router>
           
        </div>
       
    )
}
