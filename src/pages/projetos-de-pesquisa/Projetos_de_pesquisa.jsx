import React from 'react'
import { Navbar, Quadro_projetos, Titleheader } from '../../components'
import { Copyright, Footer } from '../../containers';
import './projetos_de_pesquisa.css'


function Projetos_de_pesquisa() {
  return (
    <>
    <div className='gradient'>
          <Navbar/>
      </div>
      <Titleheader texto={'Projetos de Pesquisa'}/>
      <div className='area-pesquisadores-internos'>
          <div>
              <label className='label-pesquisador' for="buscar-projeto">Buscar projeto de pesquisa:</label>
              <input type="text" id="buscar-pesquisador" name="buscar-projeto"/>
          </div>
      </div>
      <Quadro_projetos numero_projeto={'44'} nome_pessoa={'JOÃO PAULO BRITES LEOPOLDO'} periodo_vigencia={'08/2019 - 08/2020'} palavras_chave={'oi; olá; você'} titulo_projeto={'MEU PROJETO'} descricao_projeto={'Meu exemplo de projeto'} integrantes={'João Paulo Brites Leopoldo'} email_integrante={'brites237@outlook.com'}/>
      <Quadro_projetos numero_projeto={'40'} nome_pessoa={'ZÉ NINGUÉM'} periodo_vigencia={'08/2019 - 08/2020'} palavras_chave={'oi; olá; você'} titulo_projeto={'MEU PROJETO'} descricao_projeto={'Meu exemplo de projeto'} integrantes={'João Paulo Brites Leopoldo'} email_integrante={'brites237@outlook.com'}/>
        
      <Footer/>
      <Copyright/>
      </>
  )
}

export default Projetos_de_pesquisa