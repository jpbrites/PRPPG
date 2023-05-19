import React from 'react'
import { Integrante, Navbar, Quadro_expansivel, Titleheader } from '../../components'
import { Copyright, Footer } from '../../containers'
import './pesquisadores_int.css'


function Pesquisadores_int() {
    
  return (
    <>
        <div className='gradient'>
            <Navbar/>
        </div>
        <Titleheader texto={'Pesquisadores Internos'}/>
        <div className='area-pesquisadores-internos'>
            <div>
                <label className='label-pesquisador' for="buscar-pesquisador">Buscar pesquisador:</label>
                <input type="text" id="buscar-pesquisador" name="buscar-pesquisador"/>
            </div>
            
            <Integrante nome_aba={['Projetos - 1', 'Alunos - 2', 'Grupos - 3']} descricao_aba={['eu','voce','ai']} nome_integrante={'Acácio Figueiredo Neto (Doutor)'} descricao_integrante={'Professor do(a) Universidade Federal do Vale do São Francisco, Campus Juazeiro, Colegiado de Engenharia Agrícola e Ambiental. Atua na área Ciências Biológicas, Agrárias e Saúde e interdisciplinar.'}/>
            
        </div>
        
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Pesquisadores_int