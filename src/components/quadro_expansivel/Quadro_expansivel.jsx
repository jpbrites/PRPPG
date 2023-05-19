import React, {useState} from 'react'
import { RiAddCircleFill, RiSubtractFill } from 'react-icons/ri';
import './quadro_expansivel.css'

function Quadro_expansivel({titulo_aba, conteudo_aba}) {
    const [expandido, setExpandido] = useState(false);

    const handleExpansao = () => {
        setExpandido(!expandido);
      };
  return (
    
    <div  className='aba-pesquisadores'>
      <div className='conjunto-aba'>
        <div><span className='title-aba-pesq'>{titulo_aba}</span> </div>
        {expandido ? (<RiSubtractFill onClick={handleExpansao} className='icon-pesqu' size={25}/>) : (<RiAddCircleFill onClick={setExpandido} className='icon-pesqu' size={25}/>)}
      </div>
                        {expandido ? (
                            <div className='conteudo-aba-pesquisadores'>
                            <ul>
                              <li>
                               {conteudo_aba}

                              </li>
                            </ul>
                          </div>
                        ) : null} 
                    </div>
     

  
  )
}

export default Quadro_expansivel