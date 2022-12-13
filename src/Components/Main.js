import React from 'react';
import hero from '../images/image-hero-desktop.png';
import audio from '../images/client-audiophile.svg';
import databiz from '../images/client-databiz.svg';
import  meet from '../images/client-meet.svg';
import  maker from '../images/client-maker.svg';



function Main() {
  return (
    <div className='main'>
      <div className='main_para'>
        <p className='heading'>Make <br/>remote work</p>
        <p className='para'>Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.
</p>
        <button > Learn more</button>

        <div className='images'>
         <img src={databiz}  alt='data'/>
         <img src={audio}  alt='audio'/>
         <img src={meet}  alt='meet'/>
         <img src={maker}  alt='maker'/>
        </div>

      </div>
      <img className='hero_img' src={hero} alt='hero'/>
      
    </div>
  )
}

export default Main