import React from 'react'
import './footer.css'
import logo from '../../assets/logo_uni.png'
import {RiWhatsappLine, RiInstagramLine, RiTwitterLine, RiFacebookLine, RiFacebookBoxLine, RiFacebookCircleLine, RiPhoneLine, RiMailCloseLine, RiMailOpenLine, RiMapPin2Line} from 'react-icons/ri'


function Footer() {
  return (
    <div className='area-footer'>
      <div className='footer-about'>
        <img src={logo}></img>
        <p>A Pró-reitoria de Pesquisa, Pós-graduação e Inovação coordena e supervisiona todas as atividades de pesquisa e de pós-graduação desenvolvidas pela UNIVASF. Tem a atribuição de atuar junto aos organismos governamentais de fomento da pesquisa, da ciência, da tecnologia e da pós-graduação empreendendo e apoiando iniciativas de inserção e integração da universidade com o desenvolvimento acadêmico, científico e tecnológico.</p>
        <div className='area-icones-footer'>
          <span>Siga-nos: </span>
          <div className='area-icones-footer-icons'>
            <RiFacebookCircleLine id='icone' size={35}/>
            <RiInstagramLine id='icone' style={{marginLeft: '0.8rem', marginRight: '0.8rem'}} size={35}/>
            <RiTwitterLine id='icone' size={35}/>
          </div>
        </div>
      </div>
      <div className='footer-navigation'>
        <span>Navegação</span>
        <div className='footer-line'></div>
        <div className='footer-links'>
          <span><a>PRPPG</a></span>
          <span><a>Dados</a></span>
          <span><a>Informações</a></span>
          <span><a>Cadastros</a></span>
          <span><a>Arquivos</a></span>
        </div>
      </div>
      <div className='footer-contatos'>
        <span className='footer-contatos-title'>Informações de contato</span>
        <div className='footer-line'></div>
        <div className='footer-telefone'>
          <RiPhoneLine id='icon-footer' style={{color: 'white'}} size={30}/>
          <span className='footer-telefone-span'>(87) 2101-6796</span>
        </div>
        <div className='footer-email'>
          <RiMailOpenLine id='icon-footer' style={{color: 'white'}} size={30}/>
          <span className='footer-email-span'>prppg@univasf.edu.br</span>
        </div>
        <div className='footer-local'>
          <RiMapPin2Line id='icon-footer last' style={{color: 'white'}} size={48}/>
          <span className='footer-local-span'>Av. José de Sá Maniçoba, s/n - Centro, 
            Petrolina - PE. CEP: 56304-917</span>
        </div>
        <span className='footer-contatos-title' id='footer-noticias'>Receba nossas notícias</span>
        <div className='footer-line'></div>
        <form className='input-email'>
          <input type="email" placeholder='Email' id="email" name="email"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Footer