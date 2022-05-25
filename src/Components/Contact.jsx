import React from 'react';
import AccountBox from './AccountBox';
import {H1Contact} from '../Designs/common';
function Contact (props){
    return (
        <div className="main">
          <H1Contact style={{color:props.color,transition:'all 200ms ease-in-out'}}>Any thought's?</H1Contact>
          <AccountBox color = {props.color}/>
        </div>
    );
} 

export default Contact;