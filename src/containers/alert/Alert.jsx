import React from 'react'
import './alert.css'

function Alert({texto, texto_botao}) {
  return (
    <div className='area'>
        <span className='titulo'>{texto}</span>
        <button className='botao'>{texto_botao}</button>
    </div>
  )
}

export default Alert