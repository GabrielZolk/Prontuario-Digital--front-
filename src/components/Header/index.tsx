
import logo from '../../assets/images/logo-header.png'
import avatar from '../../assets/icons/avatar.png'
import burguer from '../../assets/icons/burguer-menu.png'
import React from 'react'
import { HeaderStyle, LinkStyle, Menu } from './Header.style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LoginModal } from '../Modal/LoginModal'
import { RegisterModal } from '../Modal/RegisterModal'


const index = () => {
  const USUARIO = localStorage.getItem('token');
  console.log(USUARIO === null)

  const [active, setMode] = useState(false)
  const toggleMode = () => {
    setMode(!active)
  }

  const [modalType, setModalType] = useState('')

  const openLoginModal = () => {
    setModalType('login')
  }

  const openRegisterModal = () => {
    setModalType('register')
  }

  return (
    <>
      <Menu className="Menu">
        <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
          <div className="hamburguer hamburguerIcon"></div>
        </div>
        <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
          <div className="list">
            <ul className="listItems">
            {USUARIO === null ?
            (<>
              <Link to='/'><li>Home</li></Link>
              <Link to="/quemsomos"><li>Quem somos</li></Link>
              <Link to='#'><li>Suporte</li></Link>
              <Link onClick={openLoginModal} to='#'><li>Login</li></Link>
            </>)
            :
            (<>
              <Link to='/'><li>Home</li></Link>
              <Link to="/quemsomos"><li>Quem somos</li></Link>
              <Link to="/exames"><li>Meus Exames</li></Link>
              <Link to="/prontuario"><li>Meu Prontuário</li></Link>
              <Link to="/consultas"><li>Minhas Consultas</li></Link>
              <Link to='#'><li>Suporte</li></Link>
              <Link to='#'><li>Logout</li></Link>
            </>)}
            </ul>
          </div>
        </div>
      </Menu>
      <HeaderStyle className='d-flex justify-content-around align-items-center'>
        <div><img src={logo} alt="logo" /></div>
        <div className='links'>
          {USUARIO === null ?
          (<>
            <LinkStyle className='linksin' to="/">Home</LinkStyle>
            <LinkStyle className='linksin' to="/quemsomos">Quem somos</LinkStyle>
            <LinkStyle className='linksin' to="#">Suporte</LinkStyle>
            <LinkStyle onClick={openLoginModal} className='linksin' to="#">Login</LinkStyle>
            <img src={avatar} alt="" />
          </>
          )
          :
          (<>
            <LinkStyle className='linksin' to="/">Home</LinkStyle>
            <LinkStyle className='linksin' to="/quemsomos">Quem somos</LinkStyle>
            <LinkStyle className='linksin' to="/exames">Meus Exames</LinkStyle>
            <LinkStyle className='linksin' to="/prontuario">Meu Prontuário</LinkStyle>
            <LinkStyle className='linksin' to="/consultas">Minhas Consultas</LinkStyle>
            <LinkStyle className='linksin' to="#">Suporte</LinkStyle>
            <LinkStyle className='linksin' to="#">Logout</LinkStyle>
            <img src={avatar} alt="" />
          </>)}
        </div>
      </HeaderStyle>
      {modalType === 'login' && <LoginModal onClick={openRegisterModal} />}
      {modalType === 'register' && <RegisterModal />}
    </>
  )
}

export default index
