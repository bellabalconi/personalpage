import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../images/8bits.png";
import './header.css'
import Contato from "../contato"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {    
    Navbar,
    Nav,
    NavItem,
    NavLink,
   } from 'reactstrap';
import './header.css';

export default class Header extends Component { 
            
      render() {
        return (
          <div>
            <Navbar className="meu-header" light expand="md">
            <div className="icons">
          <a href="https://www.facebook.com/izabella.balconi"> <FontAwesomeIcon className="facebook icons animation" href="" icon={faFacebookF} size="2x"  /> </a>
          <a href="https://www.linkedin.com/in/izabellabalconi/"> <FontAwesomeIcon className="linkedin icons animation" href="" icon={faLinkedinIn} size="2x"  /></a>
          <a href="https://github.com/bellabalconi">  <FontAwesomeIcon className="github icons animation" href="" icon={faGithub} size="2x"  />    </a>       
       </div>
            
              
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="texto-header" href = "#contato" >Contato</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="texto-header" href="#about">Sobre</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="texto-header" href="#projetos">Projetos</NavLink>
                  </NavItem>                  
                </Nav>              
            </Navbar>            
            <div>
            
  
    </div>
          </div>
        );
      }
    }
