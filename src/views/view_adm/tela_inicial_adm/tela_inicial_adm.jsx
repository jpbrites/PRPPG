import React from 'react'
import { Navbar } from '../../../components'
import "./tela_inicial_adm.css"
import { FcReading, FcConferenceCall, FcBusinessman, FcRules, FcSurvey, FcFinePrint, FcNook, FcDeleteDatabase, FcAdvertising, FcFile, FcInspection, FcStatistics, FcTodoList, FcNews, FcSmartphoneTablet, FcFolder, FcOpenedFolder, FcEngineering, FcLeave } from "react-icons/fc"
import { ImExit } from "react-icons/im"
import { Copyright, Footer } from '../../../containers'

function tela_inicial_adm() {
  return (
    <>
      <div className='gradient'>
            <Navbar/>
      </div>
      <div className='area-adm'>
        <div className='area-titulo-adm'>
          <span className='titulo-adm'><span className='titulo-adm-tipo'>Administrador, </span>Seja bem vindo à Área do Pesquisador da PRPPGI</span>
          <div></div>
        </div>
        <div className='area-funcoes-adm'>
          <div className='linha-funcoes-adm'>
            <div className='card-funcao-adm'>
              <div><FcConferenceCall className='icone-adm'/></div>
              <span>Cadastro de usuários</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcBusinessman className='icone-adm'/></div>
              <span>Pesquisadores Internos</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcBusinessman className='icone-adm'/></div>
              <span>Avaliadores Externos</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcReading className='icone-adm'/></div>
              <span>Alunos</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcRules className='icone-adm'/></div>
              <span>Grupos de Pesquisa</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcSurvey className='icone-adm'/></div>
              <span>Projetos</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcFinePrint className='icone-adm'/></div>
              <span>Planos</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcNook className='icone-adm'/></div>
              <span>Currículos</span>
            </div>
          </div>
          <div className='linha-funcoes-adm'>
            <div className='card-funcao-adm'>
              <div><FcDeleteDatabase className='icone-adm'/></div>
              <span>Excluir Histórico</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcAdvertising className='icone-adm'/></div>
              <span>Cobranças</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcFile className='icone-adm'/></div>
              <span>Distribuição de Relatório</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcInspection className='icone-adm'/></div>
              <span>Resultados Relatório</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcStatistics className='icone-adm'/></div>
              <span>Distribuição de Projetos</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcTodoList className='icone-adm'/></div>
              <span>Avaliações</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcTodoList className='icone-adm'/></div>
              <span>Avaliações PT</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcNews className='icone-adm'/></div>
              <span>Cadastro de Editais</span>
            </div>
          </div>
          <div className='linha-funcoes-adm'>
            <div className='card-funcao-adm'>
              <div><FcSmartphoneTablet className='icone-adm'/></div>
              <span>Acessos</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcFolder className='icone-adm'/></div>
              <span>Relatórios Finais</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcOpenedFolder className='icone-adm'/></div>
              <span>Relatórios Parciais</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcEngineering className='icone-adm'/></div>
              <span>Ferramentas</span>
            </div>
            <div className='card-funcao-adm'>
              <div><FcLeave className='icone-adm'/></div>
              <span>Popups</span>
            </div>
            <div className='card-funcao-adm'>
              <div><ImExit style={{color: 'red'}} className='icone-adm'/></div>
              <span>Sair</span>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
      <Copyright/>
    </>
    
  )
}

export default tela_inicial_adm