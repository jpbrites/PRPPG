import React from 'react'
import './alert.css'

function Alert({imagem,texto, texto_botao}) {
  const estilo = {
    backgroundImage: `url(${imagem})`,
  };
  return (
    <div className='area-alert' style={estilo}>
        <span className='titulo'>{texto}</span>
        <button className='botao'>{texto_botao}</button>
    </div>
  )
}

export default Alert