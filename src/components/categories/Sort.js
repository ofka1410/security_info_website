import React,{useContext,useState} from 'react'
import {context} from '../../UseContext'
import {Grid,Container,Typography,Divider,TextField} from '@material-ui/core';
import '../../css/landingPage.css'
import SortResults from './SortResults';

import SearchIcon from '@mui/icons-material/Search';
export default function Sort() {
     const {results,gitrepo,gitpass,gitoken,gitkey,mailShow,allip,records,
    domain,subdomain,data_res,setOpenDialog,openDialog,txt_rec,ns_rec,mx_rec,a_rec}= useContext(context)
    const [subject,setSubject]=useState('')
     const[isSearch,setIsSearch]=useState(false)
    const[arrResults,setArrResults]=useState([])
     const search_results=(e)=>{
       setIsSearch(true)
        let e_Value=e

        console.log(e_Value)
        if(subject=='Data'){
        const results_data_res= data_sort(e_Value)
        if(results_data_res.length){
        setArrResults(results_data_res)
        console.log(results_data_res)
        }
        else{
          setArrResults([])
        }
       
        }
        else if(subject=='Github'){
       const git= github_sort(e_Value)
       if(Object.keys(git).length !== 0){
        setArrResults(git)
       }
         else{
          setArrResults([])
        }
     
       
       console.log(git)
       return;
        }
         else if(subject=='Subdomains'){
           subdomain_sort(e_Value)
        }
         else if(subject=='Records'){
         const records= records_sort(e_Value)
         if(Object.keys(records).length !== 0){
             setArrResults(records)
         }

          else{
          setArrResults([])
        }
          console.log(records)
          return;
        }


        else if(subject=='Emails'){
         const email_results = mail_sort(e_Value)
          console.log(email_results)
          if(email_results.length){
          setArrResults(email_results)
          return;
          }
          else{
            setArrResults([])
          }
         
        }
        else if(subject=='Allip'){
          console.log(allip)
         const ip_r = ip_sort(e_Value)
         if(ip_r.length){
         setArrResults(ip_r)
         }
         else{
          setArrResults([]) 
         }
         
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
          git_results.gitoken.push(...token)
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
      console.log(value)
         Object.keys(mailShow).map(function(keyName){
           console.log(keyName)
           if(keyName.includes(value)){
            results_data.push(...mailShow[keyName])
           }
         })
         
         return results_data

    }
    const data_sort =(value)=>{
      let results_data=[]
      
          Object.keys(data_res).map(function(keyName,index){
           if(keyName.includes(value)){
            //  data_res[keyName]= {...data_res[keyName],ip:keyName}
            results_data.push(data_res[{keyName}])
            
            console.log(results_data)
          
           }
         })
      
      
          console.log(results_data)
         return results_data

    }

     const ip_sort =(value)=>{
      const ip= allip.filter(el=>el.includes(value))
      return ip
    }

    const subdomain_sort =(value)=>{
      
    }


    const records_sort =(value)=>{
     // txt_rec,ns_rec,mx_rec,a_rec
     let arr={
       a_records:[],
       txt_records:[],
       ns_records:[],
        mx_records:[]

     }

     
     
      const a_records = a_rec.filter(el=>el.includes(value))
        if(a_records.length){
            arr.a_records=a_records
        }
      const txt_records = txt_rec.filter(el=>el.includes(value))

      if(txt_records.length){
          console.log(txt_records)
          arr.txt_records=txt_records
      }
      const ns_records = ns_rec.filter(el=>el.includes(value))

      if(ns_records.length){
        
        arr.ns_records = ns_records
      }
      const mx_records = mx_rec.filter(el=>el.includes(value))

       if(mx_records.length){
       
        arr.mx_records=mx_records
      }
     
        return arr;
      
      
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
        <Grid xs={12}>
         {isSearch?
         <SortResults
         subject={subject}
         arrResults={arrResults}
          />
         :<></>}
        
        </Grid>
        </Grid>
    )
}
