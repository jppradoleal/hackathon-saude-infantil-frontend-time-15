import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/navbar.css';

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-links">
        <Link to="/" className="link">Conheça</Link>  
        <Link to="/" className="link">Calculadoras</Link>  
        <Link to="/" className="link">Materiais</Link>
      </div>
      <div className="user-controls">
        <Link to="/login" className="link">Entrar</Link>
        <Link to="/signup" className="link">Cadastrar</Link>
      </div>
    </nav>
  )
}