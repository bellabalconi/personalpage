import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Projetos from "./components/projetos"
import Contato from "./components/contato"
import Skills from "./components/skills/skills";
import Footer from "./components/footer/footer"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 

class App extends Component {
  
  render() {
    return (
      
      <div className="">
        <header>
          <Router>
            <Header />            
            <div className="background-cover">                      
              <div className="middle screen">
                      
                <h1 className="text">
                  Izabella Balconi 
                   <h5>Front-end developer</h5> 
                </h1>
              </div>
            </div>
            <Info />
            <Projetos/>     
            <Skills />
            <Contato/>
            <ScrollUpButton/>
            <Footer/>
            
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
