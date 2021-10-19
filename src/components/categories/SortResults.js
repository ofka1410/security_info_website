import React from 'react'
import { makeStyles,Typography,Divider,Grid } from '@material-ui/core';
    import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
export default function SortResults({arrResults,subject}) {
    return (
        <div style={{width:'100%'}} className='git-paper'>
     
{
        arrResults.length>0?
        <>    
    {arrResults.map((item,index)=>{
                return(
                   
                    <Grid className='list-grid'>
                         {
                             subject=='Allip'?
                             <Typography style={{color:'#57686b'}}  className='git-headers' variant="h6" component="p">
                                <span className='span-rec' >IP has found:</span> 
                      <a style={{marginBottom:'10px',fontWeight:'700',textDecoration:'none'}} > {item}</a>
                    </Typography> 
                            :subject=='Data' &&arrResults.length>1?
                                 <TableContainer style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}  >
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{height:'50px',backgroundColor:'#7a7d80'}}>
            <TableCell className='headers_table'>IP</TableCell>
            <TableCell className='headers_table' align="center">Port</TableCell>
            <TableCell className='headers_table' align="center">Hostname</TableCell>
            <TableCell className='headers_table' align="center">Domain</TableCell>
            <TableCell className='headers_table' align="center">City</TableCell>
            <TableCell className='headers_table' align="center">Country</TableCell>
            <TableCell className='headers_table' align="center">OS</TableCell>
            <TableCell className='headers_table' align="center">ISP</TableCell>
            <TableCell className='headers_table' align="center">Organization</TableCell>
          </TableRow>
        </TableHead>
    
        <TableBody>
                         {
                             item.length?
                             <>
                            { item.map(el=>{
                                return(
                                  <TableRow >
                                      <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row">
                                       {el.ip}
                                    </TableCell>
                                    <TableCell className='table_cell' style={{color:'#637296'}}  component="th" scope="row" align="center">{el.port ||'None'}</TableCell>
                                    <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row" align="center">{el.hostname ||'None'}</TableCell>
                    
                                    <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row" align="center">{el.domain ||'None'}</TableCell>
                                    <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row" align="center">{el.City ||'None'}</TableCell>
                                    <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row" align="center">{el.Country ||'None'}</TableCell>
                                    <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row" align="center">{el.OS ||'None'}</TableCell>
                                    <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row" align="center" >{el.ISP ||'None'}</TableCell>
                                     <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row" align="center" >{el.organization ||'None'}</TableCell>
                                     </TableRow>
                                )
                            
                            })}
                            </>
                         :<h1 style={{color:'#4d4e4f'}}>No results</h1>}
        
        </TableBody>
        </Table>
        </TableContainer>
                       :subject=='Emails'?
                       <Typography style={{color:'#637296'}} className='git-headers' variant="p" component="p">
                       <a tyle={{color:'#637296',marginBottom:'10px',fontWeight:'700',textDecoration:'none',marginLeft:'10px'}} href={Object.keys(item)}> {Object.keys(item)}</a>
                    </Typography> 

                     
                       :<></>}
                    
                   </Grid>
                )
              
            }) 
        }  
             </>
            : Object.keys(arrResults).length !== 0?
            Object.keys(arrResults).map(function(item, keyIndex){
                return(
                    <Grid style={{display:'flex'}} className='list-grid'>
                        <Grid>
                    <Typography style={{color:'#57686b'}} className='git-headers' variant="h6" component="p">
                      <a tyle={{color:'#637296',marginBottom:'10px',fontWeight:'700',textDecoration:'none'}}>{item}</a>
                    </Typography> 
                   </Grid>
                   <Grid>
                       {
                           
                           arrResults[item].length?
                           
                           arrResults[item].map(el=>{
                               return(
                                <Grid>
                                <Typography style={{color:'#637296'}} className='git-headers' variant="p" component="p">
                                  <a tyle={{color:'#637296',marginBottom:'10px',fontWeight:'700',textDecoration:'none'}}>{el}</a>
                                </Typography> 
                               </Grid> 
                               )
                      
                           })
                           
                      :<></> }
                    </Grid> 
                   </Grid>
                )
              
            })   
             
        :<h1 style={{color:'#4d4e4f'}}>No results</h1>

     }
        

        </div>
        
    )
}
