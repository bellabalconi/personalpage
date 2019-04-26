import React, { Component } from "react";
import "./skills.css";
import sword from "../images/sword.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faHtml5, faCss3Alt, faJava } from '@fortawesome/free-brands-svg-icons'


export default class Skills extends Component {
    
  render() {
    return (
      <React.Fragment>
        <h2 className="sobre"><img className="marginright" src={sword}/>Skills:</h2>
          <div className= "icons-skill margin-bot">
          <FontAwesomeIcon className="margin" href="" icon={faJsSquare} size="8x"  />
          <FontAwesomeIcon className="margin" href="" icon={faReact} size="8x"  />
          <FontAwesomeIcon className="margin" href="" icon={faJava} size="8x"  />  
          <FontAwesomeIcon className="margin" href="" icon={faHtml5} size="8x"  />
          <FontAwesomeIcon className="margin" href="" icon={faCss3Alt} size="8x"  />  
           </div>
        
      </React.Fragment>
    );
  }
}