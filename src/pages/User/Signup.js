import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import '../../styles/User/signup.css'

export default function Signup() {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmarSenha, setConfirmarSenha ] = useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if ( senha === confirmarSenha ) {
      api.post('/user/create', {
        nome, email, senha
      }).then(({data}) => {
        alert(data.message);
        history.push('/login');
      }).catch(({response: {data}}) => alert(data));
    }
  }

  return (
    <div id="page-signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className="form-signup">
        <label htmlFor="nome">Nome *: </label>
        <input 
          type="text" 
          id="nome"
          value={nome}
          onChange={({target}) => setNome(target.value)}
        />

        <label htmlFor="email">Email *: </label>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />

        <label htmlFor="senha">Senha *: </label>
        <input 
          type="password" 
          id="senha"
          value={senha}
          onChange={({target}) => setSenha(target.value)}
        />

        <label htmlFor="senha">Confirme sua senha *: </label>
        <input 
          type="password" 
          id="senha"
          value={confirmarSenha}
          onChange={({target}) => setConfirmarSenha(target.value)}
        />

        <button>Registrar!</button>
      </form>
    </div>
  );
}