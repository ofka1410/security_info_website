import React,{useContext,useState} from 'react'
import {context} from '../../UseContext'
import {Grid,Container,Typography,Divider,TextField} from '@material-ui/core';
import '../../css/landingPage.css'
import SearchIcon from '@mui/icons-material/Search';
export default function Sort() {
     const {results,gitrepo,gitpass,gitoken,gitkey,mailShow,allip,records,
    domain,subdomain,data_res,setOpenDialog,openDialog,txt_rec,ns_rec,mx_rec,a_rec}= useContext(context)
    const [subject,setSubject]=useState('')

    const search_results=(e)=>{
        let e_Value=e
        
        
        console.log(e_Value)
        if(subject=='Data'){
        const results_data_res= data_sort(e_Value)
        console.log(results_data_res)
        }
        else if(subject=='Github'){
       const git= github_sort(e_Value)
       console.log(git)
       return;
        }
         else if(subject=='Subdomains'){
           subdomain_sort(e_Value)
        }
         else if(subject=='Records'){
          records_sort(e_Value)
          
        }
        else if(subject=='Emails'){
         const email_results = mail_sort(e_Value)
          console.log(email_results)
          return;
        }
        else if(subject=='Allip'){
          console.log(allip)
         const ip_r = ip_sort(e_Value)
         console.log(ip_r)
         return;

        }
    }
    
    const github_sort =(value)=>{
      const git_results={
        gitrepo:[],
        gitpass:[],
        gitoken:[],
        gitkey:[]
      }
    console.log(gitrepo,gitpass,gitoken,gitkey)
        const repo= gitrepo.filter(el=>el.includes(value))
        if(repo.length){
          git_results.gitrepo.push(...repo)
        }
        const pass= gitpass.filter(el=>el.includes(value))
         if(pass.length){
          git_results.gitpass.push(...pass)
        }
          const token= gitoken.filter(el=>el.includes(value))
            if(token.length){
          git_results.gittoken.push(...token)
        }
           const key= gitkey.filter(el=>el.includes(value))
           if(key.length){
          git_results.gitkey.push(...pass)
        }
        
        return  git_results
    }

     const mail_sort =(value)=>{
      console.log(mailShow)
       let results_data=[]
      console.log(data_res)
         Object.keys(mailShow).map(function(keyName){
           if(keyName.includes(value)){
            results_data.push({keyName:mailShow[keyName]})
           }
         })
         return results_data

    }
    const 
    data_sort =(value)=>{
      let results_data=[]
      console.log(data_res)
         Object.keys(data_res).map(function(keyName){
           if(keyName.includes(value)){
            results_data.push({keyName:data_res[keyName]})
           }
         })
         return results_data

    }

     const ip_sort =(value)=>{
      const ip= allip.filter(el=>el.includes(value))
      return ip
    }

    const subdomain_sort =(value)=>{
      
    }
    const records_sort =(value)=>{
      
    }
    
    
    return (
      <Grid xs={12}>
       <div className='integrate-warper'>
          <div className='sort-warper'>
        <div style={{width:'90%'}}>
           <TextField 
           onChange={(e)=>{search_results(e.target.value)}}
           InputProps={{
    endAdornment: (
          <SearchIcon />
    )
  }}
           className='sorting-input' label='search:' variant='outlined'/>
          {/* <SearchIcon className='search-button' style={{color:'#081124'}}/> */}
        </div>
        <div style={{width:'90%'}}>
        <select onChange={(e)=>{setSubject(e.target.value)}} placeHolder='Choose subject' className='select'>
        <option>Choose subject</option>
         <option value='Subdomains'>Subdomains</option>
          <option value='Emails'>Emails</option>
           <option value='Records'>Records</option>
            <option value='Github'>Github</option>
             <option value='Allip'>All ip</option>
              <option value='Data'>Data</option>
        </select>
        </div>
        </div>
        </div>
        </Grid>
    )
}
