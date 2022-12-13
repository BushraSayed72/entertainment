import React, { useState}  from 'react';
import snap from '../images/logo.svg';
import Features from './FeaturesList.js';
import Company from './CompanyList.js';
import down from '../images/icon-arrow-down.svg';
import up from '../images/icon-arrow-up.svg';


function Navbar() {

  const [open, setOpen]= useState(false); 
  return (
    <div className='navbar'>
    <div className='left-div'>
    <img src={snap} alt='snap'/>
    <ul className='nav-list'>
        <div className='features' >
        <li>Features <img src={down}/>
          <img src ={up} onClick={()=>{setOpen(!open)}}/>
        <Features/></li> 
         </div>
        <div className={`features ${open? 'active': 'inactive'}`}>
        <li>Company <img src={down}/>
        <img src ={up}/>
        <Company/></li>
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
