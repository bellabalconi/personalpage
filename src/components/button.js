import './button.css'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class MeuBotao extends Component {
    geraHtmlInterno = ( { link, textoBotao } ) => {
        return link ? (
          <Link to = {{ pathname: link}} className="botao-link" >{ textoBotao } </Link>
        ) : textoBotao
    
      }    
   
    render() {
      const { corBotao, textoBotao, funcBotao, link} = this.props
      return (
        <React.Fragment>
          <button className={`button ${corBotao}`} onClick={ funcBotao } >
          { this.geraHtmlInterno( { link, textoBotao } ) }
        </button>
          
        </React.Fragment>
      )
    }
  }