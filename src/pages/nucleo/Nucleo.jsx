import React from 'react'
import { Navbar, Titleheader } from '../../components'
import { Copyright, Footer } from '../../containers'
import img_nucleo from '../../assets/img-nucleo.png'
import nucleo1 from '../../assets/nucleo1.png'
import nucleo2 from '../../assets/nucleo2.png'
import './nucleo.css'

function Nucleo() {
  return (
    <>
    <div className='gradient'>
        <Navbar />
    </div>
    <Titleheader texto={'Núcleo de Inovação Tecnológica'}/>
    <div className='content-nucleo'>
      <div className='imgs-nucleo'>
        <img className='img-nucleo1' src={nucleo1}></img>
        <img className='img-nucleo2' src={nucleo2}></img>
      </div>
      <div className='text-nucleo'>
        <p>O Núcleo de Inovação Tecnológica UNIVASF é uma extensão da Pró - Reitoria de Pesquisa, Pós – Graduação e Inovação, onde tem a responsabilidade de gerenciar as políticas de inovações da Universidade. Tem como objetivos promover a inovação assim como a preservação da propriedade intelectual, protegendo todas as marcas, patentes entre outras invenções geradas na Universidade.</p>
        <p>A Universidade Federal do Vale do São Francisco, por meio do Núcleo de Inovação Tecnológica (NIT), no uso de suas atribuições no que concede a Lei de Inovação n° 10.973/2004, oferece à comunidade o atendimento a assuntos relacionados a propriedade intelectual e as tecnologias desenvolvidas nesta Universidade.</p>
        <p>A equipe NIT tem o imenso prazer em atendê-los e espera aumentar cada vez mais o apoio à comunidade acadêmica dos campi Petrolina Centro, Juazeiro, Ciências Agrárias, São Raimundo Nonato, Senhor do Bonfim e Paulo Afonso, pois, a meta do NIT/UNIVASF é ampliar o portfólio de Propriedade Intelectual, Transferência de Tecnologia e Empreendedorismo para a sociedade. Para realização deste trabalho, acredite: você é o nosso principal parceiro!!</p>
      </div>
  
    </div>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default Nucleo