import { useState,createContext } from "react";
export const context = createContext()
function ContextProvider(props){
    const[domain,setDomain]=useState('Domain name:');
    const [isDomain,setIsDomain]=useState(false);
    const [open, setOpen] = useState(false);
    const [progress,setProgress] = useState(false)
    const [mailShow,setMailShow]=useState([]);
    const [allip,setAllip] =useState([]);
    const [records,setRecords] =useState([]);
    const [gitrepo,setGitrepo] =useState([]);
    const [ gitpass,setGitpass] =useState([]);
    const [ gitoken,setGitoken] =useState([]);
    const [ gitkey,setGitkey] =useState([]);
     const [ subdomain,setSubdomain] =useState([]);
     const [ data_res,setData_res] =useState([]);
    const [results,setResults]=useState([])




        const integrate_ohad=async()=>{
            try{
                setProgress(true)
              const res= await fetch('http://localhost:9000/ohad')
        
              const data = await res.json()
              console.log(data)
               
                if(data.sucsses){
                   
                    setMailShow(data.mailShow)
                    setAllip(data.allip)
                    setRecords(data.records) 
                    setGitrepo(data.gitrepo)
                    setGitpass(data.gitpass)
                    setGitoken(data.gitoken)
                    setGitkey(data.gitkey)
                    setData_res(data.data)
                    setSubdomain(data.subdomain)
                    setProgress(false)
                  
                const arr=[
                        {
                    name:"Subdomains",
                    path:'subdomain',
                    result_number:data_res.length
                        },
                        {
                            name:"Emails",
                            result_number:data.mailShow.length,
                            path:'mailshow'
                        },
                        {
                            name:"Records",
                            path:'records',
                            result_number:data.records.length
                        },
                        {
                            name:"Github",
                            path:'github',
                            result_number:parseInt(data.gitpass.length)+parseInt(data.gitoken.length)
                            +parseInt(data.gitrepo.length)+parseInt(data.gitkey.length)
                        },
                        {
                            path:'allip',
                            name:"Allip",
                            result_number:data.allip.length
                        },
                        {
                            path:'data',
                            name:"Data",
                            result_number:data_res.length
                        }
                    ]
                    setResults(arr)
                    setIsDomain(true)

                }
                else{
                    setOpen(true)
                    setProgress(false)
                }
              
            }
            catch(err){
                setProgress(false)
              console.log(err)
              setOpen(true)
            } 
    }
    const value={
        domain,setDomain,integrate_ohad,isDomain,mailShow,allip,records,
        gitrepo,gitpass,gitoken,gitkey,open,setOpen,progress,results,setIsDomain,data_res,subdomain
    }
    return(
        <context.Provider value={value}>
            {props.children}
        </context.Provider>
            )
}
export default ContextProvider;