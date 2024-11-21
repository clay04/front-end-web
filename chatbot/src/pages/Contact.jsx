import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Hermes from '../hermesAI.png'

class Contact extends Component {
    render() {
      return (
        <div className="sticky-about">
          <div className="card-about">
          <img src={Hermes} alt='logo' className='logo' />
            <h1>Contact Us</h1>
          </div>
        </div>
      );
    }
  }
  
  export default Contact;