import React from 'react'
import { Quadro_expansivel} from '../../components'
import './integrante.css'

function Integrante( {foto_integrante, nome_integrante, descricao_integrante, nome_aba, descricao_aba}) {

  let titulosAbas = [];
  let conteudosAbas = [];

  nome_aba.forEach((item) => {
    titulosAbas.push(item);
  });

  descricao_aba.forEach((item) => {
    conteudosAbas.push(item);
  });


  return (
    <div className='pesquisadores-internos'>
        <div className='foto-pesquisador'></div>
        <div className='caixa-pesquisador'>
            <span>{nome_integrante}</span>
            <p>{descricao_integrante}</p>
            <div className='conjunto-abas'>
              {titulosAbas.map((titulo, index) => (
                <Quadro_expansivel key={index} titulo_aba={titulo} conteudo_aba={conteudosAbas[index]}/>
              ))}
            </div>
        </div>
</div>
  )
}

export default Integrante