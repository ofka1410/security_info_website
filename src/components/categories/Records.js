import React,{useContext,useEffect} from 'react'
import '../../css/github.css'
import Dashboard_back from '../Dashboard_back'
import {context} from '../../UseContext'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../css/main.css'

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function Records() {
   const {txt_rec,ns_rec,mx_rec,a_rec}= useContext(context)
    
      const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
   
    return (
       <div>   
   

<Box sx={12}>
   
      <Grid container spacing={10}>
        <Grid style={{width:'800px'}} item xs={12} md={6}>
          
          <Demo>
          <Typography style={{color:'#637296'}} sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
          Text_Records
          </Typography>
            <List dense={dense}>
           
               {txt_rec.map(el=>{
               return(
             <ListItem>
             <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  
                  <ListItemText className='records_links'
                    primary={el}
                    
                  />
                </ListItem>

               )
               })}
             </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
         
          <Demo>
          <Typography style={{color:'#637296'}} sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            NS_Records
          </Typography>
            <List dense={dense}>
              {ns_rec.map(el=>{
               return(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                  className='records_links'
                    primary={el}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
               )
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          
          <Demo>
          <Typography style={{color:'#637296'}} sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            MX_Records
          </Typography>
            <List dense={dense}>
             {mx_rec.map(el=>{
               return(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <a style={{textDecoration:'none'}}href={el}>
                  <ListItemText
                  className='records_links'
                    primary={el}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                   </a>
                </ListItem>
               
               )
              })}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
        
          <Demo>
          <Typography style={{color:'#637296'}} sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            A_Records
          </Typography>
            <List dense={dense}>
              {a_rec.map(el=>{
               return(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                  className='records_links'
                    primary={el}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
               )
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>




{/* <Grid>

<Grid>
<h1>txt_rec</h1>
{
  txt_rec.map(el=>{
    return(
  <h3>{el}</h3>
    )
  
  })
}
</Grid>

<Grid>

<h1>ns_rec</h1>
{
  ns_rec.map(el=>{
    return(
  <h3>{el}</h3>
    )
  
  })
}
</Grid>

<Grid>
<h1>mx_rec</h1>
{
  mx_rec.map(el=>{
    return(
  <h3>{el}</h3>
    )
  
  })
}
</Grid>


</Grid> */}

      
    </div>
        
         
              
    
    )
}
