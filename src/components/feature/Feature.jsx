import React from 'react'
import './feature.css'

function Feature({titulo, texto, cor, espaco}) {
  return (
    <div className='features-container'>
        <div className='features-container__feature-title'>
            <div />
            <h1 style={{color: cor}}>{titulo}</h1>
        </div>
        <div style={{marginTop: espaco}} className='features-container_feature-text'>
          <p style={{color: cor}}>{texto}</p>
        </div>
    </div>
  )
}

export default Feature