import React from 'react'
import './cursos.css'
import curso1 from '../../assets/curso1.png'
import curso2 from '../../assets/curso2.png'
import curso3 from '../../assets/curso3.png'

function Cursos() {
  return (
    <div className='area-cursos'>
        <span className='title1-cursos'>Cursos e programas de Pós-graduações da Univasf</span>
        <span className='title2-cursos'>Conheça mais sobre os cursos e programas de pós-graduação da Univasf</span>
        <div className='cards-cursos'>
            <div className='card'>
                <img src={curso1}></img>
                <span className='curso-title'>Cursos de graduação</span>
                <div className='line-curso'></div>
                <span className='curso-conteudo'>A Univasf oferece mais de 25 cursos de graduação em 4 campi. A graduação, ou ensino superior, é o primeiro nível da formação universitária e completá-lo permite o exercício da profissão escolhida, caso esta seja atrelada a exigência de um diploma, como a medicina ou engenharia.</span>
            </div>
            <div className='card'>
                <img src={curso2}></img>
                <span className='curso-title'>Programas - Stricto Sensu</span>
                <div className='line-curso'></div>
                <span className='curso-conteudo'>A Univasf oferece 14 cursos de pós-graduações stricto sensu, que correspondem a programas de mestrado e doutorado abertos a candidatos diplomados em cursos superiores de graduação e que atendam às exigências das instituições de ensino e ao edital de seleção dos alunos.</span>
            </div>
            <div className='card'>
                <img src={curso3}></img>
                <span className='curso-title'>Programas - Lato Sensu</span>
                <div className='line-curso'></div>
                <span className='curso-conteudo'>A Univasf oferece 6 cursos de pós-graduações lato sensu, que correspondem a programas de especialização e incluem os cursos designados como MBA (Master Business Administration). Os cursos têm duração mínima de 360 horas.</span>
            </div>
        </div>
    </div>
  )
}

export default Cursos