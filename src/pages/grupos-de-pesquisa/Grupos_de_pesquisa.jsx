import React from 'react'
import { Integrante, Navbar, Quadro_expansivel, Titleheader } from '../../components'
import { Copyright, Footer } from '../../containers'
import './grupos_de_pesquisa.css'

function Grupos_de_pesquisa() {
  return (
    <>
    <div className='gradient'>
          <Navbar/>
      </div>
      <Titleheader texto={'Grupos de Pesquisa'}/>
      <div className='area-pesquisadores-internos'>
          <div>
              <label className='label-pesquisador' for="buscar-grupo">Buscar grupo de pesquisa:</label>
              <input type="text" id="buscar-pesquisador" name="buscar-grupo"/>
          </div>
      </div>
      <div className='area-grupos-pesquisa'>
        <p>Abordagens Tecnológicas na Arqueologia</p>
        <span> <span className='destaque'>Líder: </span> LEANDRO SURYA CARVALHO DE OLIVEIRA SILVA</span>
        <span> <span className='destaque'>Vice-líder: </span> dueduiebiui</span>
        <span> <span className='destaque'>Ano de Criação: </span> 2011</span>
          <Quadro_expansivel titulo_aba={'Resumo de atuação'} conteudo_aba={'ex1'}/>
          <Quadro_expansivel titulo_aba={'Integrantes'} conteudo_aba={'ex1'}/>
          <Quadro_expansivel titulo_aba={'Projetos'} conteudo_aba={'ex1'}/>
      </div>

      <div className='area-grupos-pesquisa'>
        <p>Abordagens Tecnológicas na Arqueologia</p>
        <span> <span className='destaque'>Líder: </span> LEANDRO SURYA CARVALHO DE OLIVEIRA SILVA</span>
        <span> <span className='destaque'>Vice-líder: </span> dueduiebiui</span>
        <span> <span className='destaque'>Ano de Criação: </span> 2011</span>
          <Quadro_expansivel titulo_aba={'Resumo de atuação'} conteudo_aba={'ex1'}/>
          <Quadro_expansivel titulo_aba={'Integrantes'} conteudo_aba={'ex1'}/>
          <Quadro_expansivel titulo_aba={'Projetos'} conteudo_aba={'ex1'}/>
      </div>
      <Footer/>
      <Copyright/>

      
  </>
  )
}

export default Grupos_de_pesquisa