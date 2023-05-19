import React from 'react'
import './login.css'
import fotouni from '../../assets/univasf2.jpg'
import logo from '../../assets/logo_uni_colorido.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='divisao-tela-login'>
        <div className='lado-esquerdo'>
            <Link style={{width: '290px'}} to={'/'}><img style={{cursor: 'pointer'}} src={logo}></img></Link>
            <div className='container-login'>
                <div className='area-login'>
                    <div className='barra-login' />
                    <span className='label-login'>Login</span>
                    <span className='descricao-login'>Acesso ao Sistema de Gerenciamento de Projetos de Pesquisa</span>
                    <form className='form-login'>
                        <label className='label-email-login' for="email-login">Email:</label>
                        <input type="email" id="email-login" name="email"/>

                        <label className='label-senha-login' for="senha-login">Senha:</label>
                        <input type="password" id="senha-login" name="senha"/>
                        <span className='esqueceu-senha'>Esqueceu a senha?</span>

                        <Link to={'/tela-inicial-adm'}><input className='botao-login' type="submit" value="Entrar"/></Link>
                    </form>
                </div>
            </div>
        </div>
        <div className='lado-direito'>
            <img src={fotouni}></img>
        </div>
    </div>
  )
}

export default Login