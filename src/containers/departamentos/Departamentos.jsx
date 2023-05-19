import React from 'react'
import './departamentos.css'
import capelo from '../../assets/capelo.png'
import graduacao from '../../assets/graduacao.png'
import pesquisa from '../../assets/pesquisa.png'
import inovacao from '../../assets/inovacao.png'

function Departamentos() {
  return (
    <div className='departamentos'>
        <div className='departamentos-title-area'>
            <span>Departamentos, Núcleos e Câmaras integrantes</span>
        </div>
        <div className='container-dep'>
            <div className='grid-departamentos'>
                <div className='item-departamentos pos'>
                    <img className='img-departamentos' src={capelo}></img>
                    <p className='title-departamentos'>Câmara de pós-graduação</p>
                    <p className='conteudo-departamentos'>A Câmara de Pós-Graduação é uma instância consultiva e deliberativa em matéria acadêmico-administrativa, envolvendo o funcionamento dos programas de Pós-Graduação</p>
                </div>
                <div className='item-departamentos graduacao'>
                    <img className='img-departamentos' src={graduacao}></img>
                    <p className='title-departamentos'>Departamento de pós-graduação</p>
                    <p className='conteudo-departamentos'>Coordena e supervisiona todas as atividades de pesquisa e de pós-graduação desenvolvidas pela UNIVASF. Representa a universidade junto ao Fórum Nacional de Pró-Reitores de Pesquisa e Pós-Graduação.</p>
                </div>
            </div>
            <div className='grid-departamentos2'>
                <div className='item-departamentos pesquisa'>
                    <img className='img-departamentos' src={pesquisa}></img>
                    <p className='title-departamentos'>Câmara de pesquisa</p>
                    <p className='conteudo-departamentos'>O Departamento de Pesquisa, órgão da Pró-Reitoria de Pesquisa e Pós-Graduação, é o setor responsável por formular e acompanhar a política de pesquisa da UNIVASF.</p>
                </div>
                <div className='item-departamentos inovacao'>
                    <img className='img-departamentos' src={inovacao}></img>
                    <p className='title-departamentos'>Câmara de inovação</p>
                    <p className='conteudo-departamentos'>NIT tem a responsabilidade de gerenciar as políticas de inovações da Universidade, promover a inovação e a preservação da propriedade intelectual, protegendo todas as marcas, patentes entre outras invenções geradas.</p>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Departamentos