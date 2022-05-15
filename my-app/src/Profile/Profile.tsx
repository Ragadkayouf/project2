import './Profile.css'
import React, { useEffect, useState } from 'react';
import { ProfileArr } from './Profile-items';
import { url } from 'inspector';










export function Profile() {

 


   
  const myStyle={
    backgroundImage: 
"url('https://thumbs.dreamstime.com/b/%E4%B8%AD%E4%B8%96%E7%BA%AA%E5%86%85%E9%83%A8%E5%8A%A8-%E7%89%87%E5%9C%BA%E9%9D%A2-72096197.jpg')",
    height:'100vh',
    marginTop:'-190px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
   
    
  };
  
  

 return (
   
  <div className='profile'>
    
  <div>



 
</div> 
  <div style={myStyle}>
  </div>
 
<div className='Level'>
  <div className='User'>
<h1>UserName:________</h1> </div>
<label htmlFor="vol">Level:</label>
<input type="range" id="vol" name="vol" min="0" max="50"/>
</div>


  <div className='Header'><div className='first'> <a className='title1'href='Game1'> <h3 className='Math'>Game 1</h3></a> <a className='title2' href='Game'> <h3 className='Language'>Game 2</h3></a> <a className='title3'href='Game1'> <h3 className='Science'>Game 3</h3></a> </div> 
  <div className='second'><a className='title4'href='Game1'> <h3 className='Memory'>Game 4</h3></a>  <a className='title5'href='Game1'> <h3 className='Number'>Game 5</h3></a>  <a className='title6'href='Game1'> <h3 className='Shapes'>Game 6</h3></a>  </div>
  </div>  
 
  </div>


)
}



















