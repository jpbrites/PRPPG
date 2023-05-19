import React from 'react'
import { Navbar, Titleheader, Integrante } from '../../components'
import { Copyright, Footer } from '../../containers'

function Avaliadores_ext() {
  return (
    <>
      <div className='gradient'>
            <Navbar/>
        </div>
        <Titleheader texto={'Avaliadores Externos'}/>
        <div className='area-pesquisadores-internos'>
            <div>
                <label className='label-pesquisador' for="buscar-avaliador">Buscar avaliador:</label>
                <input type="text" id="buscar-pesquisador" name="buscar-avaliador"/>
            </div>
            
            <Integrante nome_aba={['Projetos - 1', 'Alunos - 2', 'Grupos - 3']} descricao_aba={['eu','voce','ai']} nome_integrante={'Acácio Figueiredo Neto (Doutor)'} descricao_integrante={'Professor do(a) Universidade Federal do Vale do São Francisco, Campus Juazeiro, Colegiado de Engenharia Agrícola e Ambiental. Atua na área Ciências Biológicas, Agrárias e Saúde e interdisciplinar.'}/>
            <Integrante nome_aba={['Projetos - 1', 'Alunos - 2', 'Grupos - 3']} descricao_aba={['eu','voce','ai']} nome_integrante={'João Paulo Brites Leopoldo (Discente)'} descricao_integrante={'Discente do curso de Engenharia da Computação'}/>
        </div>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Avaliadores_ext