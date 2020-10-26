import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/navbar.css';

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-links">
        <Link to="/" className="link">Conheça</Link>  
        <Link 
          to="https://aps.bvs.br/apps/calculadoras/?page=7" 
          className="link"
          rel="noreferrer noopener"
          target="_blank"
        >Calculadoras</Link>  
        <Link 
          to="/https://pebmed.com.br/veja-o-calendario-vacinal-do-ministerio-da-saude-para-2020/" 
          className="link"
          rel="noreferrer noopener"
          target="_blank"
        >Materiais</Link>
      </div>
      <div className="user-controls">
        <Link to="/login" className="link">Entrar</Link>
        <Link to="/signup" className="link">Cadastrar</Link>
      </div>
    </nav>
  )
}