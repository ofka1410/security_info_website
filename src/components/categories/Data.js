import React,{useContext,useEffect} from 'react'
import { makeStyles, Drawer,CssBaseline
,AppBar,Toolbar,List,Typography,Divider} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../css/main.css'
import '../../css/github.css'
import { context } from '../../UseContext';
import Side_icons from '../Side_icons';
import Dashboard_back from '../Dashboard_back'
const drawerWidth = 110;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:"#2c3138",
     display:'flex',
    justifyContent:'space-bitween'
  },
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  table: {
    minWidth: 1000,
 
    
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#2c3138",
    textAlign:'center'


  },
  // necessary for content to be below app bar
  
  content: {
    flexGrow: 1,
    
    
    marginBottom:'30px'
  
  },
}));
export default function Data() {
  const classes = useStyles();
  const {data_res}= useContext(context)
  useEffect(() => {
 console.log(data_res)

  }, [])
    return (
              <div>
         
     
    
     
        <div className={classes.toolbar} />
        
         <TableContainer style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}  component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
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

        {Object.keys(data_res).map(function(keyName){
          return(
            <>
            {data_res[keyName].map((el,index)=>{
              return(
               
                <TableRow key={keyName}>
                  <TableCell className='table_cell' style={{color:'#637296'}} component="th" scope="row">
              {keyName}
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
            ) 
        })}
        </TableBody>
      </Table>
    </TableContainer>
           
        </div>
    )
}
