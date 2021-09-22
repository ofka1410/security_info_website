import React,{useContext} from 'react'
import { Fragment } from 'react';
import LandinPage from '../components/integrate_time/LandinPage';
import '../css/landingPage.css'
import {context} from '../UseContext'
import Progress from './progress/Progress';
import Main from './main/Main';

export default function Warper() {
    const {isDomain,progress}= useContext(context)
    return (
        <Fragment>
            {
                progress?
                <Progress/>
            :<Fragment></Fragment>}
           
            {
                !isDomain?
                <div>
                <LandinPage/>
              </div>
           :<Fragment><Main/></Fragment>}
    
        </Fragment>
    )
}
