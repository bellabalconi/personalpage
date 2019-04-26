import React, { Component } from "react";
import "./contato.css";
import MeuBotao from "./button";
import Input from "./input";
import './input.css'
import letter from "./images/letter.jpg";
export default class Contato extends Component {
  render() {
    return (
        <React.Fragment>
        <h1 className="sobre"> <img className="marginright" src={letter}/>Keep in touch:</h1>
      <div id="contato"className="container forms boxshadow">
        <Input mensagemCampo = "Nome" placeholder = "nome"/>
        <Input mensagemCampo = "E-mail" placeholder = "e-mail"/>
        <label >Mensagem:</label>
        <textarea className="estilo-input mensagem-box"></textarea>
        <div className="botao-form">
        <MeuBotao corBotao = {"rosa"} textoBotao={"Enviar"} />
        </div>
     
    
      </div>
      </React.Fragment>
    );
  }
}