import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { navArr } from './nav_items';
import { Home } from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignUp} from './SignUp/SignUp';
import { Profile } from './Profile/Profile';
import { LogIn } from './LogIn/LogIn';
import { About } from './About/About';
import { Game } from './Game/Game';
import { Footer } from './Footer/Footer';
import { allElmObj } from './About/About-items';
import { Game1 } from './Game1/Game1';







function App() {
  
  return (
    <div className="App">
      <Navbar navItems={navArr}  />  

      <header className="App-header">
  
     </header> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/About" element={<About About-items={allElmObj} />} /> 
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn/>}></Route>
          <Route path="/Profile" element={<Profile/>}>
          </Route>
          <Route path="/Game" element={<Game/>} /> 
          <Route path="/Game1" element={<Game1/>} /> 
        </Routes> 
      </BrowserRouter>  
          <Footer/>
      
  </div>
  
)
}

export default App;






