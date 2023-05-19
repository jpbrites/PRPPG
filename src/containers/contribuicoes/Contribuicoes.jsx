import React from 'react'
import { Feature } from '../../components'
import './contribuicoes.css'
import check from '../../assets/check.png'
import { RiNewspaperFill, RiSurveyFill, RiGroupFill, RiUserSearchFill } from "react-icons/ri";

function Contribuicoes() {
  return (
    <div className='contrib-container'>
            <Feature cor={'#00334D'} titulo={'Nossas Contribuições'}/>
            <div className='area-contrib'>
                <div className='area-itens-contrib'>
                    <div className="container">
                        <img className='img-check' src={check}></img>
                        <p className='texto-check'>Proposição/implantação de cursos de pós-graduação stricto sensu.</p>
                    </div>

                    <div className="container">
                        <img className='img-check' src={check}></img>
                        <p className='texto-check'>Proposição de mudança de estrutura curricular e regimento de cursos de pós-graduação stricto sensu.</p>
                    </div>

                    <div className="container">
                        <img className='img-check' src={check}></img>
                        <p className='texto-check'>Expedição e registro de diplomas de pós-graduação e avaliação proposta de Banca Examinadora.</p>
                    </div>

                    <div className="container">
                        <img className='img-check' src={check}></img>
                        <p className='texto-check'>Gestão do Programa e Organização dos eventos de Iniciação Científica (PIC).</p>
                    </div>

                    <div className="container">
                        <img className='img-check' src={check}></img>
                        <p className='texto-check'>Gerenciamento do Núcleo de Inovação Tecnológica (NIT) e responder pelas atividades de pesquisa da instituição.</p>
                    </div>

                </div>
                <div className='quadro-contrib'>
                    <div className='area-numeros'>
                        <div className='conjunto'>
                            <RiUserSearchFill className='icon-contrib' style={{color: 'white'}} size={105}/>
                            <div className='quant-contrib'>
                                <p className='numero'>1287</p>
                                <p className='tipo'>Pesquisadores</p>
                            </div>
                        </div>
                        <div className='line-contrib'></div>
                        <div className='conjunto'>
                            <RiSurveyFill className='icon-contrib' style={{color: 'white'}} size={105}/>
                            <div className='quant-contrib'>
                                <p className='numero'>2277</p>
                                <p className='tipo'>Projetos</p>
                            </div>
                        </div>
                        <div className='line-contrib'></div>
                        <div className='conjunto'>
                            <RiNewspaperFill className='icon-contrib' style={{color: 'white'}} size={105}/>
                            <div className='quant-contrib'>
                                <p className='numero'>0</p>
                                <p className='tipo'>Editais</p>
                            </div>
                        </div>
                        <div className='line-contrib'></div>
                        <div className='conjunto'>
                            <RiGroupFill className='icon-contrib' style={{color: 'white'}} size={105}/>
                            <div className='quant-contrib'>
                                <p className='numero'>240</p>
                                <p className='tipo'>Grupos</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Contribuicoes