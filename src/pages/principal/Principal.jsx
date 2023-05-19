import React from 'react'
import { Navbar } from '../../components'
import { Header, About, Footer, Alert, Grupos, Contribuicoes, Departamentos, Cursos, Copyright } from '../../containers'
import alerta1 from '../../assets/alert1.png'
import alerta2 from '../../assets/alert2.png'
import './principal.css'
import { BrowserRouter } from 'react-router-dom'
import escuro from '../../assets/escuro2.png'

function Principal() {
  return (
        <div className='App'>
            <div style={{backgroundImage: `url(${escuro})`, backgroundSize: 'cover',
    height: '100vh',}} >
                <Navbar />
                <Header />
            </div>
            <About />
            <Alert imagem={alerta1} texto={'É bolsista e ainda não se cadastrou?'} texto_botao = {'Cadastre-se'}/>
            <Grupos/>
            <Contribuicoes/>
            <Alert imagem={alerta2} texto={'Ainda não conhece nossa equipe?'} texto_botao = {'Equipe PRPPG'}/>
            <Departamentos/>
            <Cursos/>
            <Footer/>
            <Copyright/>
        </div>
        
  )
}

export default Principal