import './About.css'
import React from 'react';
import {useEffect} from 'react'
import {allElmObj} from './About-items';



export function About( ) {
  

useEffect(() => {
 (document.querySelector('.About')as HTMLElement).innerHTML=allElmObj.theinnerHTML
    
}, [])

  
    return (
        <div  className="About" >
       
     
         
  </div>
            
        
    )
}

