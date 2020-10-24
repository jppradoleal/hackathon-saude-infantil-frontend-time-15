import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import UserContext from '../../context/UserContext';

import '../../styles/User/login.css';

export default function Login() {
  const { setToken } = useContext(UserContext);
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ rememberMe, setRememberMe ] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    api.post('/user/login', {
      email, senha
    }).then(({data}) => {
      setToken(data.token);
      alert(data.message);
      history.push('/dashboard');
    }).catch(({response: {data}}) => alert(data.message));
  }
  
  return (
    <div id="page-login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email *:</label>
        <input 
          type="email" 
          id="email" 
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
        
        <label htmlFor="senha">Senha *:</label>
        <input 
          type="password" 
          id="senha" 
          value={senha}
          onChange={({target}) => setSenha(target.value)}
        />

        <div>
          <input 
            type="checkbox" 
            id="rememberMe"
            value={rememberMe}
            onChange={({target}) => setRememberMe(target.value)}
          />
          <label htmlFor="rememberMe"> Remember me</label>
        </div>

        <button>Acessar!</button>
      </form>
    </div>
  );
}