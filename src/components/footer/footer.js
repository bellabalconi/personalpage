import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import './footer.css'
export default class Footer extends Component {   
      render() {
        return (
    <div className="meuFooter" >     
            <div className="icons">
          <a href="https://www.facebook.com/izabella.balconi"> <FontAwesomeIcon className="facebook icons-footer animation" href="" icon={faFacebookF} size="2x"  /> </a>
          <a href="https://www.linkedin.com/in/izabellabalconi/"> <FontAwesomeIcon className="linkedin icons-footer animation" href="" icon={faLinkedinIn} size="2x"  /></a>
          <a href="https://github.com/bellabalconi">  <FontAwesomeIcon className="github icons-footer animation" href="" icon={faGithub} size="2x"  />    </a>       
       </div>
            
          </div>
        );
      }
    }
