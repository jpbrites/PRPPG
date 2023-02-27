import React from 'react'
import './header.css'
import principal from '../../assets/principal.png'
import {RiWhatsappLine, RiInstagramLine, RiTwitterLine} from 'react-icons/ri'


function Header() {
  return (
    <div className='header section_padding' id='home'>
      <div className='header-content'>
        <h1>Seja bem-vindo ao site da
         <span className='gradiente'> <br/>Departamento de pesquisa!</span></h1>
        <p>Navegue pelo site e conheça nossos esforços em prol <br/> da inicição
        científica e pós-graduação.</p>
        <button className='header-button'>Cadastre-se</button>
        <div className='area-icones'>
          <RiWhatsappLine id='icone' size={35}/>
          <RiInstagramLine id='icone' size={35}/>
          <RiTwitterLine id='icone' size={35}/>
        </div>
      </div>
      <div className='header-image'>
          <img src={principal}></img>
      </div>
    </div>
  )
}

export default Header