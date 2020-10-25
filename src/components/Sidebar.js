import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { 
  MdInsertChart,  
  MdPersonOutline,
  MdHome,
  MdFavoriteBorder,
  MdInsertEmoticon,
  MdMenu,
  MdPowerSettingsNew
} from 'react-icons/md';

import { AiFillQuestionCircle, AiOutlineCalendar } from 'react-icons/ai';

import { Link, useHistory } from 'react-router-dom';

import '../styles/components/sidebar.css'

export default function Sidebar() {
  const [ menuOpen, setMenuOpen ] = useState(true);
  const { setToken } = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    setToken('');
    history.push('/');
  }

  return (
    <div id="sidebar">
      <button 
        className="dropdown" 
        onClick={() => setMenuOpen(menuOpen => !menuOpen)}
        style={{display: menuOpen ? 'none' : 'block'}}
      >
        <MdMenu size={16} color="#4a4a4a" />
      </button>
      <nav className={!menuOpen ? 'hidden' : ''}>
        <Link className="link" to="/dashboard">
          <MdHome size={16} color="#2846CA" className="icon"/>
          Início
        </Link>
        <Link className="link" to="/dashboard/data">
          <MdPersonOutline size={16} color="#4a4a4a" className="icon"/>
          Meus dados
        </Link>
        <Link className="link">
          <MdInsertChart size={16} color="#4a4a4a" className="icon"/>
          Calculadoras
        </Link>
        <Link className="link">
          <AiOutlineCalendar size={16} color="#4a4a4a" className="icon"/>
          Calendário de Vacinação
        </Link>
        <Link className="link">
          <MdFavoriteBorder size={16} color="#4a4a4a" className="icon"/>
          Alimentação Saudável
        </Link>
        <Link className="link">
          <MdInsertEmoticon size={16} color="#4a4a4a" className="icon"/>
          Atividades e brincadeiras
        </Link>
        <hr />
        <Link className="link">
          <AiFillQuestionCircle size={16} color="#4a4a4a" className="icon"/>
          Ajuda
        </Link>
        <p className="link" onClick={handleLogout}>
          <MdPowerSettingsNew size={16} color="#ff6347" className="icon"/>
            Sair
        </p>
      </nav>
    </div>
  );
}