import React, { Component } from "react";
import "./projetos.css";
import "../App.css"
import MeuBotao from './button.js'
import tool from "./images/tool.jpg";
import { Card,  CardTitle, CardText } from 'reactstrap';


export default class Projetos extends Component {
  render() {
    return (
      <div id="projetos">
      
       <h1 className="sobre"><img className="" src={tool}/> Some projects:  </h1>
       <div className="cards container margin-bot">
       <Card className="card2 boxshadow" body outline color="grey">
        <CardTitle className="titulo">PROJETO 1</CardTitle>
        <CardText className="corpo">With supporting text below as a natural lead-in to additional content.</CardText>        
        <MeuBotao corBotao = {"rosa"} textoBotao={"Ver mais"} />
      </Card>
      <Card className="card2 boxshadow" body outline color="grey">
        <CardTitle className="titulo">PROJETO 2</CardTitle>
        <CardText className="corpo">With supporting text below as a natural lead-in to additional content.</CardText>
        
        <MeuBotao corBotao = {"rosa"} textoBotao={"Ver mais"} />
      </Card>
      <Card className="card2 boxshadow" body outline color="grey">
        <CardTitle className="titulo">PROJETO 3</CardTitle>
        <CardText className="corpo">With supporting text below as a natural lead-in to additional content.</CardText>
        
        <MeuBotao corBotao = {"rosa"} textoBotao={"Ver mais"} />
      </Card>
      </div>
      </div>
      
    );
  }
}