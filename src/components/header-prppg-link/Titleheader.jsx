import React from 'react'
import './titleheader.css'

function Titleheader({imagem,texto}) {
    const fundo = {
        backgroundImage: `url(${imagem})`,
      };
  return (
    <div className='area-title-header'>
        <span>{texto}</span>
        <div className='line-title-header'/>
    </div>
  )
}

export default Titleheader