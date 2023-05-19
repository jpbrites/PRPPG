import React from 'react'
import { Navbar, Titleheader } from '../../components'
import img_nucleo from '../../assets/img-nucleo.png'
import './camara.css'
import { Copyright, Footer } from '../../containers'

function Camara() {
  return (
    <>
    <div className='gradient'>
        <Navbar />
    </div>
    <Titleheader imagem={img_nucleo} texto={'Câmara de pesquisa'}/>
    <div className='area-camara-pesquisa'>
      <p className='text-camara'>A Câmara de Pós-Graduação é uma instância consultiva e deliberativa em matéria acadêmico-administrativa, envolvendo o funcionamento dos programas de Pós-Graduação. Dentre as atribuições da CPG estão:</p>
      <ul>
        <li>Proposição de cursos de Pós-Graduação stricto sensu e lato sensu</li>
        <li>Homologação do número de vagas ofertadas pelos cursos de Pós-Graduação</li>
        <li>Avaliação dos professores dos programas de Pós-Graduação, a cada dois anos, com base no relatório anual (Coleta Capes) elaborado pelo curso</li>
      </ul>
      <div className='area-nomes-camara primeiro-nome'>
        <span className='nome-negrito-camara'>Presidente da Câmara de Pós-Graduação <br/></span>
        <span>Prof. Helinando Pequeno de Oliveira - Pró-Reitor de Pesquisa, Pós-Graduação e Inovação</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Ciência dos Materiais <br/></span>
        <span>Prof. Wagner de Assis Cangussu Passos</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Ciência Animal <br/></span>
        <span>Prof. Mário Adriano Ávila Queiroz</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Recursos Naturias do Semiárido <br/></span>
        <span>Prof. Jackson Roberto Guedes da Silva Almeida</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Engenharia Agrícola <br/></span>
        <span>Profa. Sílvia Helena Nogueira Turco</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Ciências da Saúde e Biológicas <br/></span>
        <span>Profa. Márcia Bento Moreira</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Ciências Veterinárias no Semiárido <br/></span>
        <span>Profa. Dra. Maria Helena Tavares de Matos</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Matemática em Rede Nacional <br/></span>
        <span>Prof. Severino Cirino de Lima Neto</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Residência Multiprofissional em Saúde da Família <br/></span>
        <span>Profa. Glória Maria Pinto Coelho</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Discente do curso de Pós-Graduação em Engenharia Agrícola <br/></span>
        <span>Hideo de Jesus Nagahama</span>
      </div>
      <div className='area-nomes-camara'>
        <span className='nome-negrito-camara'>Docente do curso de Pós-Graduação em Recursos Naturais do Semiárido <br/></span>
        <span>Edigênia Cavalcante da Cruz Araújo</span>
      </div>
    </div>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default Camara