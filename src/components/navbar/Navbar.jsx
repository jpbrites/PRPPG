import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine, RiArrowDownSLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo_uni.png'

const Menu = () => (
  <>
    <p>
      <a>PRPPGI
        <div className='sub-menu'>
          <a className='item-sub-menu'>Núcleo de inovação</a>
          <a className='item-sub-menu'>Câmara de pesquisa</a>
          <a className='item-sub-menu'>Comitê Institucional</a>
        </div>
      </a>
    </p>
    <p>
      <a>
        Dados
        <div className='sub-menu'>
          <a className='item-sub-menu'>Pesquisadores Internos</a>
          <a className='item-sub-menu'>Avaliadores Externos</a>
          <a className='item-sub-menu'>Estudantes</a>
          <a className='item-sub-menu'>Grupos de Pesquisa</a>
          <a className='item-sub-menu'>Projetos de Pesquisa Vigentes</a>
        </div>
      </a>
    </p>
    <p>
      <a>
        Informações
        <div className='sub-menu'>
          <a className='item-sub-menu'>Calendários e prazos</a>
          <a className='item-sub-menu'>Editais</a>
          <a className='item-sub-menu'>Resultados</a>
          <a className='item-sub-menu'>Notícias</a>
          <a className='item-sub-menu'>Links</a>
        </div>
      </a>
    </p>
    <p>
      <a>
        Cadastros
        <div className='sub-menu'>
          <a className='item-sub-menu'>Pesquisadores e Avaliadores</a>
          <a className='item-sub-menu'>Sign up - Non Brazillian</a>
          <a className='item-sub-menu'>Bolsistas e voluntários</a>
          <a className='item-sub-menu'>Área do usuário</a>
        </div>
      </a>
    </p>
    <p>
      <a>
        Arquivos
        <div className='sub-menu' id='ultimo'>
          <a className='item-sub-menu'>Formulários</a>
          <a className='item-sub-menu'>Relatórios</a>
          <a className='item-sub-menu'>Resoluções</a>
          <a className='item-sub-menu'>Projetos</a>
          <a className='item-sub-menu'>Legislação</a>
          <a className='item-sub-menu'>CT - Infra</a>
        </div>
      </a>
    </p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='navbar-user'>
        <button type='button'>Área do usuário</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
            <p>
                <a className='link1'>
                  PRPPGI
                  <RiArrowDownSLine className='icon-down' size={20}/>
                  <div className='sub-menu1' >
                      <a className='item-sub-menu'>Núcleo de inovação</a>
                      <a className='item-sub-menu'>Câmara de pesquisa</a>
                      <a className='item-sub-menu'>Comitê Institucional</a>
                  </div>


                </a>
              </p>
              <p>
                <a className='link2'>
                  Dados
                  <RiArrowDownSLine className='icon-down' size={20}/>
                  <div className='sub-menu2'>
                      <a className='item-sub-menu'>Pesquisadores Internos</a>
                      <a className='item-sub-menu'>Avaliadores Externos</a>
                      <a className='item-sub-menu'>Estudantes</a>
                      <a className='item-sub-menu'>Grupos de Pesquisa</a>
                      <a className='item-sub-menu'>Projetos de Pesquisa Vigentes</a>
                    </div>
                </a>
              </p>
              <p>
                <a className='link3'>
                  Informações
                  <RiArrowDownSLine className='icon-down' size={20}/>
                  <div className='sub-menu3'>
                      <a className='item-sub-menu'>Calendários e prazos</a>
                      <a className='item-sub-menu'>Editais</a>
                      <a className='item-sub-menu'>Resultados</a>
                      <a className='item-sub-menu'>Notícias</a>
                      <a className='item-sub-menu'>Links</a>
                    </div>
                </a>
              </p>
              <p>
                <a className='link4'>
                  Cadastros
                  <RiArrowDownSLine className='icon-down' size={20}/>
                  <div className='sub-menu4'>
                      <a className='item-sub-menu'>Pesquisadores e Avaliadores</a>
                      <a className='item-sub-menu'>Sign up - Non Brazillian</a>
                      <a className='item-sub-menu'>Bolsistas e voluntários</a>
                      <a className='item-sub-menu'>Área do usuário</a>
                    </div>
  
                </a>
              </p>
              <p>
                <a className='link5'>
                  Arquivos
                  <RiArrowDownSLine className='icon-down' size={20}/>
                  <div className='sub-menu5' id='ultimo'>
                      <a className='item-sub-menu'>Formulários</a>
                      <a className='item-sub-menu'>Relatórios</a>
                      <a className='item-sub-menu'>Resoluções</a>
                      <a className='item-sub-menu'>Projetos</a>
                      <a className='item-sub-menu'>Legislação</a>
                      <a className='item-sub-menu'>CT - Infra</a>
                    </div>
                  
                </a>
            </p>
              <div className='navbar-menu_container-links-user'>
                <button type='button'>Área do usuário</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar