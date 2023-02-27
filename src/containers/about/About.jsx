import React from 'react'
import { Feature } from '../../components'
import './about.css'
import equipe from '../../assets/equipe.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about2'>
            <Feature cor={'#00334D'} titulo={'Quem somos'} texto = {'A Pró-reitoria de Pesquisa, Pós-graduação e Inovação coordena e supervisiona todas as atividades de pesquisa e de pós-graduação desenvolvidas pela UNIVASF. Tem a atribuição de atuar junto aos organismos governamentais de fomento da pesquisa, da ciência, da tecnologia e da pós-graduação empreendendo e apoiando iniciativas de inserção e integração da universidade com o desenvolvimento acadêmico, científico e tecnológico, regional e nacional. Representa a universidade junto ao Fórum Nacional de Pró-Reitores de Pesquisa e Pós-Graduação.'}/>
            <div className='area-img'>
              <img className='imagem' src={equipe}></img>

            </div>
        </div>
    </div>
  )
}

export default About