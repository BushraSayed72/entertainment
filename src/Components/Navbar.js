import React, { useState}  from 'react';
import snap from '../images/logo.svg';
import Features from './FeaturesList.js';
import Company from './CompanyList.js';
import down from '../images/icon-arrow-down.svg';
import up from '../images/icon-arrow-up.svg';
import FeaturesList from './FeaturesList.js';
import CompanyList from './CompanyList.js';


function Navbar() {

  // const [click, setClick]= useState(false); 
  const [click, setClick]= useState (false);
  return (
    <div className='navbar'>
    <div className='left-div'>
    <img src={snap} alt='snap'/>
    <ul className='nav-list'>
        <div className='features' >
        <li>Features </li>
        <div className='menu-icon' onClick={()=>{setClick(!click)}}>
        {click? <img src={down}  />: <img src ={up}/> }
        </div>
        <FeaturesList 
            className={click? 'active':'inactive'}/>
         
         </div> 
        <div className='features'>
        <li>Company </li>
        <div className='menu-icon' >
        {click? <img src={down}  />: <img src ={up}/> }
        </div>
         
        <CompanyList/>
        </div>
        
        <li>Careers</li>
        <li>About</li>
    </ul>
    </div>
    <div className='right-div'>
    <ul>
        <li>Login</li>
        </ul>

        <button>Register</button>
    </div>

        
      
    </div>
  )
}

export default Navbar
