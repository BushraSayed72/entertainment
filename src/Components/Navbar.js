import React, { useState}  from 'react';
import snap from '../images/logo.svg';
import Features from './FeaturesList.js';
import Company from './CompanyList.js';
import down from '../images/icon-arrow-down.svg';
import up from '../images/icon-arrow-up.svg';
import { FaListUl } from 'react-icons/fa';
import { FaCompressArrowsAlt } from 'react-icons/fa';
function Navbar() {

  const [click, setClick]= useState (false);
  const [open, setOpen]= useState (false);
  const handleClick =()=> setDropDownMobile(!dropDownMobile);
  const closeMobileMenu =()=> setDropDownMobile (false);
  const [dropDownMobile, setDropDownMobile]=useState (false);
  return (
    <div className='navbar'>
     <div className='left-div'>
    <img src={snap} alt='snap'/>


    <div className={dropDownMobile? 'nav-menu active': 'nav-menu'}>
   
    <ul className= 'nav-list'>
        <div className='features' >
        <li  className='nav-item' onClick={closeMobileMenu}>  Features </li>
        <div className='menu-icon' onClick={()=>{setClick(!click)}}>
        {click? <img src={down}  />: <img src ={up}/> }
        </div>
        <Features 
          click={click}/>
         
         </div> 
        <div className='features'>
        <li className='nav-item' onClick={closeMobileMenu}>Company </li>
        <div className='menu-icon' onClick={()=>{setOpen(!open)}} >
        {open? <img src={down}  />: <img src ={up}/> }


        </div>
         
        <Company 
          open={open}
        />
        </div>
        
        <li className='nav-item'  onClick={closeMobileMenu}>Careers</li>
        <li className='nav-item'  onClick={closeMobileMenu}>About</li>
    </ul>
    
    </div>
    </div>
    <div className='right-div'>
    <ul className='nav-list'>
        <li className='nav-item' onClick={closeMobileMenu}>Login</li>
        

        <button className='nav-item' onClick={closeMobileMenu}>Register</button>
        </ul>
        
    </div>

      
      
    <div className='menuu-icon' onClick={handleClick}> {dropDownMobile? <FaCompressArrowsAlt/>:<FaListUl/>  }</div>  
  </div>

  )
}

export default Navbar
