import React, {useState} from 'react'
import { RiAddCircleFill, RiSubtractFill } from 'react-icons/ri';
import './quadro_projetos.css'

function Quadro_projetos({numero_projeto, nome_pessoa, periodo_vigencia, palavras_chave, titulo_projeto, descricao_projeto, integrantes, email_integrante}) {
    const [expandido_projeto, setExpandido_projeto] = useState(false);

    const handleExpansao_projeto = () => {
        setExpandido_projeto(!expandido_projeto);
      };
  return (
    <div className='area-projeto-pesquisa'>
        <div  className='aba-quadro-projeto'>
            <div className='conjunto-aba-projeto' onClick={handleExpansao_projeto}>
                <div>{expandido_projeto ? (<RiSubtractFill className='icon-proj' size={35}/>) : (<RiAddCircleFill className='icon-proj' size={35}/>)}</div>
                <div className='frases-projeto'>
                    <span className='title-aba-projeto'>Projeto PRPPG {numero_projeto} - {nome_pessoa} <span className='destaque-proj'>(Vigência {periodo_vigencia})</span></span> 
                    <span className='palavras-chave-projeto'><span className='destaque-proj'>Palavras-chave: </span> {palavras_chave}</span>
                </div>
            </div>
                {expandido_projeto ? (
                    <div className='conteudo-aba-projeto'>
                        <span className='conteudo-titulo-projeto'>{titulo_projeto}</span>
                        <p className='conteudo-descricao-projeto'>{descricao_projeto}</p>
                        <span className='conteudo-integrantes-label'>Integrantes</span>
                        <span className='conteudo-integrantes'>{integrantes} ({email_integrante}) - <span className='destaque-proj'>Estudante bolsista;</span></span>
                    </div>
                ) : null} 
            </div>
      </div>

  )
}

export default Quadro_projetos
