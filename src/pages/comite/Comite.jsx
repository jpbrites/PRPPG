import { useState, useEffect } from 'react'
import React from 'react'
import { Navbar, Titleheader } from '../../components'
import './comite.css'

function Comite() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fazer uma requisição ao backend assim que o componente for montado
    fetch('/api/test') // Rota no seu servidor Node.js que irá lidar com o teste
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error(error));
  }, []);
  return (
    <>
    <div className='gradient'>
        <Navbar/>
    </div>
    <Titleheader texto={'Comitê Institucional'}/>
    </>
   
  )
}

export default Comite