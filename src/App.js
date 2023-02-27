import React from 'react'
import './App.css'
import { Feature, Navbar, Principal } from './components'
import { Header, About, Footer, Alert, Grupos } from './containers'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Alert texto={'É bolsista e ainda não se cadastrou?'} texto_botao = {'Cadastre-se'}/>
      <Grupos/>
    </div>
  )
}

export default App
