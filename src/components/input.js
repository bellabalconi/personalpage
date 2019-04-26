import React, { Component } from 'react'
import './input.css'

export default class Input extends Component {

  

    render() {
        const { type, style, placeholder, mensagemCampo } = this.props
        return (
            <div className = "input-mensagem">
                {
                    mensagemCampo && <span className="mensagem-campo">{mensagemCampo}</span>
                }
                <div>
                    <input type={type} className={style || "estilo-input"} placeholder={placeholder} />
                </div>

            </div >
        )
        
    }

}