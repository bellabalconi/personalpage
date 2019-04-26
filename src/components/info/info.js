import React, { Component } from "react";
import "./info.css";
import "bootstrap/dist/css/bootstrap.min.css";
import eu from "../images/eu.jpg";
import icon from '../images/coracaoRoxo.png'



export default class Info extends Component {
  render() {
    return (
      <React.Fragment>
        
        
       <img className="coracoes container" src={icon}/>      
       <div className="margin-bot"> 
       <h2 className="sobre" >About me:</h2>
          <div id="about" className="container boxshadow background-roxo"> 
          
          <img className="minhaFoto" src={eu}/>                    
            
            <p className="about">
              Me chamo Izabella, tenho 24 anos e estou cursando Técnico em Informática com ênfase em desenvolvimento de software.
              Atualmente estagiando no time de projetos internos da DBC Company, e gosto de atuar mais na parte de front-end.
                          
            </p>    
          
            </div>
        </div>
      </React.Fragment>
    );
  }
}
