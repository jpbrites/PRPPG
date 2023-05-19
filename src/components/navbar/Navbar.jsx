import React, { useState, useRef, useEffect } from 'react';
import {RiMenu3Line, RiCloseLine, RiArrowDownSLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo_uni4.png'
import { useNavigate, NavLink, matchPath, Link } from 'react-router-dom';
import Principal from '../../pages/principal/Principal';


function Navbar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (itemIndex) => {
    if (expandedItems.includes(itemIndex)) {
      setExpandedItems(expandedItems.filter((index) => index !== itemIndex));
    } else {
      setExpandedItems([...expandedItems, itemIndex]);
    }
  };

  const items = [
    { title: 'PRPPGI', subItems: [{title: 'Núcleo de inovação', href: 'nucleo-de-inovacao'}, {title: 'Caâmara de Pesquisa', href: '2'}, {title: 'Comitê Institucional', href: '3'}] },
    { title: 'Dados', subItems: [{title: 'Pesquisadores Internos', href: '4'}, {title: 'Avaliadores Externos', href: '5'}, {title: 'Estudantes', href: '6'}, {title: 'Grupos de Pesquisa', href: '7'}, {title: 'Projetos de Pesquisa Vigentes', href: '8'}] },
    { title: 'Informações', subItems: [{title: 'Calendários e prazos', href: '9'}, {title: 'Editais', href: '10'}, {title: 'Resultados', href: '11'}, {title: 'Notícias', href: '12'}, {title: 'Links', href: '13'}] },
    { title: 'Cadastros', subItems: [{title: 'Pesquisadores e Avaliadores', href: '14'}, {title: 'Sign Up - Non Brazillian', href: '15'}, {title: 'Bolsistas e Voluntários', href: '16'}, {title: 'Área do usuário', href: '17'}] },
    { title: 'Arquivos', subItems: [{title: 'Formulários', href: '18'}, {title: 'Relatórios', href: '19'}, {title: 'Resoluções', href: '20'}, {title: 'Projetos', href: '21'}, {title: 'Legislação', href: '22'}, {title: 'CT - Infra', href: '23'}] },
  ];

  const menuRef = useRef(null);

  useEffect(() => {
  
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
      menuRef.current.style.pointerEvents = 'auto';
      
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
     
    }
  }, [toggleMenu]);


  return (
  
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <Link to={'/'}><img src={logo} alt='logo' ></img></Link>
        </div>
        <div className='navbar-links_container'>
            <p>
          <a>PRPPGI
            <div className='sub-menu'>
              <Link to={'/nucleo-de-inovacao'} className='item-sub-menu'>Núcleo de inovação</Link>
              <Link to={'/camara-de-pesquisa'} className='item-sub-menu'>Câmara de pesquisa</Link>
              <Link to={'/comite-institucional'} className='item-sub-menu'>Comitê Institucional</Link>
            </div>
          </a>
        </p>
        <p>
          <a>
            Dados
            <div className='sub-menu'>
              <Link to={'/pesquisadores-internos'} className='item-sub-menu'>Pesquisadores Internos</Link>
              <Link to={'/avaliadores-externos'} className='item-sub-menu'>Avaliadores Externos</Link>
              <Link to={'/estudantes'} className='item-sub-menu'>Estudantes</Link>
              <Link to={'/grupos-de-pesquisa'} className='item-sub-menu'>Grupos de Pesquisa</Link>
              <Link to={'/projetos-de-pesquisa'} className='item-sub-menu'>Projetos de Pesquisa Vigentes</Link>
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
              <Link to={'/cadastro-pesquisadores'} className='item-sub-menu'>Pesquisadores e Avaliadores</Link>
              <a className='item-sub-menu'>Sign up - Non Brazillian</a>
              <Link to={'/cadastro-estudante'} className='item-sub-menu'>Bolsistas e voluntários</Link>
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
        </div>
      </div>
      <div className='navbar-user'>
       <Link to={'/login'}><button type='button'>Área do usuário</button></Link> 
      </div>
      <div className="navbar-menu" ref={menuRef}>
        {toggleMenu ? (
          <>
            <div className='menu-lateral-content'>
              <div className="menu">
                <RiCloseLine style={{color: 'black'}} size={30} onClick={() => setToggleMenu(false)}/>
                {items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div onClick={() => toggleItem(index)}>
                      {item.title}
                      {expandedItems.includes(index) ? ' -' : ' +'}
                    </div>
                    {expandedItems.includes(index) && (
                      <ul className="submenu">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a onClick={()=>navigate(subItem.href)}>{subItem.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
    </div>
    </div>
  )
}

export default Navbar