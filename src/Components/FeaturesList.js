import React from 'react';
import todo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';

const FeaturesList=()=>{
  return (
   
            
            <>
                <ul className='dropdown-menu' >
                    <li>
                    <img src={todo} alt=''/>
                     <span>Todo list</span>
                    </li>

                    <li>
                    <img src={calendar} alt=''/>
                    <span>Calendar</span>
                    </li>

                    <li>
                    <img src={reminders} alt=''/>
                     <span>Reminders</span>
                    </li>

                    <li>
                    <img src={planning} alt=''/>
                    <span>Planning</span>
                    </li>
                </ul>
            </>

        

  )
}

export default FeaturesList