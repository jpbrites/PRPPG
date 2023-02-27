import React from 'react'
import { Feature } from '../../components'
import './grupos.css'
import grupos from '../../assets/grupos.png'

function Grupos() {
  return (
    <div className='area1'>
        <Feature espaco={'2.7rem'} cor={'white'} titulo={'Grupos de Pesquisa'} texto = {'O Diretório dos Grupos de Pesquisa no Brasil, projeto desenvolvido no CNPq desde 1992, constitui-se em bases de dados que contêm informações sobre os grupos de pesquisa em atividade no País. O Diretório mantém uma Base corrente, cujas informações são atualizadas continuamente pelos líderes de grupos, pesquisadores, estudantes e dirigentes de pesquisa das instituições participantes, e o CNPq realiza Censos bi-anuais, que são fotografias dessa base corrente. As informações contidas nessas bases dizem respeito aos recursos humanos constituintes dos grupos (pesquisadores, estudantes e técnicos), às linhas de pesquisa em andamento, às especialidades do conhecimento, aos setores de aplicação envolvidos, à produção científica e tecnológica e aos padrões de interação com o setor produtivo. Além disso, cada grupo é situado no espaço (região, UF e instituição) e no tempo.'}/>
        <img className='imagem2' src={grupos}></img>
        <button className='botao_grupos'>Passo-a-passo</button>
    </div>
  )
}

export default Grupos