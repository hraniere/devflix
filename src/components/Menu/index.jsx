import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './styles.css'
import ButtonLink from '../ButtonLink'

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo da FEFlix" />
      </a>
      <ButtonLink as="a" className="ButtonLink" href="/">Novo vídeo</ButtonLink>
    </nav>
  )
}

export default Menu