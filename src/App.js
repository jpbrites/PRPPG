import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Avaliadores_ext, Cadastro_pesquisadores, Camara, Comite, Estudantes, Login, Pesquisadores_int, Principal, Projetos_de_pesquisa } from './pages'
import Nucleo from './pages/nucleo/Nucleo'
import Grupos_de_pesquisa from './pages/grupos-de-pesquisa/Grupos_de_pesquisa'
import Cadastro_estudante from './pages/cadastro-estudante/Cadastro_estudante'
import { Tela_inicial_adm } from './views'


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Principal/>}/>
          <Route path='/nucleo-de-inovacao' element={<Nucleo/>}/>
          <Route path='/camara-de-pesquisa' element={<Camara/>}/>
          <Route path='/comite-institucional' element={<Comite/>}/>
          <Route path='/pesquisadores-internos' element={<Pesquisadores_int/>}/>
          <Route path='/avaliadores-externos' element={<Avaliadores_ext/>}/>
          <Route path='/estudantes' element={<Estudantes/>}/>
          <Route path='/grupos-de-pesquisa' element={<Grupos_de_pesquisa/>}/>
          <Route path='/projetos-de-pesquisa' element={<Projetos_de_pesquisa/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro-pesquisadores' element={<Cadastro_pesquisadores/>}/>
          <Route path='/cadastro-estudante' element={<Cadastro_estudante/>}/>
          <Route path='/tela-inicial-adm' element={<Tela_inicial_adm/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
