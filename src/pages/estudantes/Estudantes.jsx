import React from 'react'
import { Integrante, Navbar, Titleheader } from '../../components'
import { Copyright, Footer } from '../../containers'

function Estudantes() {
  return (
    <>
      <div className='gradient'>
            <Navbar/>
        </div>
        <Titleheader texto={'Estudantes'}/>
        <div className='area-pesquisadores-internos'>
            <div>
                <label className='label-pesquisador' for="buscar-estudante">Buscar estudante:</label>
                <input type="text" id="buscar-pesquisador" name="buscar-estudante"/>
            </div>
            
            <Integrante  nome_aba={['Projeto']} descricao_aba={['oieee']} nome_integrante={'Acácio Figueiredo Neto (Doutor)'} descricao_integrante={'Professor do(a) Universidade Federal do Vale do São Francisco, Campus Juazeiro, Colegiado de Engenharia Agrícola e Ambiental. Atua na área Ciências Biológicas, Agrárias e Saúde e interdisciplinar.'}/>
            <Integrante  nome_aba={['Projeto']} descricao_aba={['mdssss']} nome_integrante={'João Paulo Brites Leopoldo (Discente)'} descricao_integrante={'Discente do curso de Engenharia da Computação'}/>
        </div>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Estudantes