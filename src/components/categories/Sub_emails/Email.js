import React from 'react'

export default function Email({email}) {
    console.log(email)
    return (
        <div>
            {
                email.length>0?
                email.map(item=>{
                  Object.keys(item).map(function(keyName, keyIndex){
                   return(
                   <h1 style={{color:'white'}}>{item}</h1>
                   )
               })
                
                })

           :<h2 style={{color:'white'}}>Choose email from the side menu</h2> }
        </div>
    )
}
