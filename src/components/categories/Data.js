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
    minWidth: 800,
    
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#2c3138",
    textAlign:'center'


  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
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
          <div style={{backgroundColor: '#8c8e91'}} className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <Typography variant="h5" noWrap>
          Data  <span></span>
          </Typography>
        </div>
          <Dashboard_back/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />

        <Divider />
        <div style={{height:'60%'}}></div>
     <Side_icons/>
    
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
         <TableContainer style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}  component={Paper}>
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
                  <TableCell component="th" scope="row">
              {keyName}
                </TableCell>
                <TableCell  component="th" scope="row" align="center">{el.port ||'None'}</TableCell>
                <TableCell  component="th" scope="row" align="center">{el.hostname ||'None'}</TableCell>

                <TableCell  component="th" scope="row" align="center">{el.domain ||'None'}</TableCell>
                <TableCell  component="th" scope="row" align="center">{el.City ||'None'}</TableCell>
                <TableCell  component="th" scope="row" align="center">{el.Country ||'None'}</TableCell>
                <TableCell component="th" scope="row" align="center">{el.OS ||'None'}</TableCell>
                <TableCell component="th" scope="row" align="center" >{el.ISP ||'None'}</TableCell>
                 <TableCell component="th" scope="row" align="center" >{el.organization ||'None'}</TableCell>
                 </TableRow>
              )
            })}
           </>
            ) 
        })}
        </TableBody>
      </Table>
    </TableContainer>
      </main>
    </div>
        
         
              
        </div>
    )
}
