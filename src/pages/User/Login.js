import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import UserContext from '../../context/UserContext';

import '../../styles/User/login.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Login() {
  const { setToken } = useContext(UserContext);
  const [ cpf, setCPF ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ rg, setRG ] = useState('');
  const [ csus, setCSUS ] = useState('');
  const [ isParent, setIsParent ] = useState(true);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if(isParent) {
      api.post('/user/login', {
        cpf, senha
      }).then(({data}) => {
        setToken(data.token);
        alert(data.message);
        history.push('/dashboard');
      }).catch(({response: {data}}) => alert(data.message));
    } else {
      api.get(`/child/detail`, { params: {
        csus,
        rg
      }}).then(({data}) => {
        console.log(data);
      });
    }
  }
  
  return (
    <>
    <Navbar />
    <div id="page-login">
      <form onSubmit={handleSubmit} className="login-form">
        <legend>Caderneta Digital<br />da Saúde da Criança</legend>

        <div className="controls">
          <p 
            className={isParent ? 'active' : 'inactive'}
            onClick={() => setIsParent(true)}
          >Pais ou responsáveis</p>
          <p 
            className={!isParent ? 'active' : 'inactive'}
            onClick={() => setIsParent(false)}
          >Profissional da Saúde</p>
        </div>
        { isParent ? (
          <>
            <div className="form-group">
              <label htmlFor="CPF">Digite seu CPF</label>
              <input 
                type="text" 
                id="CPF" 
                value={cpf}
                onChange={({target}) => setCPF(target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="senha">Digite sua senha
              <small onClick={() => history.push('/forgot')}>Esqueci minha senha</small>
              </label>
              <input 
                type="password" 
                id="senha" 
                value={senha}
                onChange={({target}) => setSenha(target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <h3>Preencha um dos campos para entrar</h3>
            <div className="form-group">
              <label htmlFor="RG">Número do Registro Civil de Nascimento da criança</label>
              <input 
                type="text" 
                id="RG" 
                value={rg}
                onChange={({target}) => setRG(target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="SUS">Número do Cartão do SUS</label>
              <input 
                type="text" 
                id="SUS" 
                value={csus}
                onChange={({target}) => setCSUS(target.value)}
              />
            </div>
          </>
        )}

        <button>Entrar</button>
        {isParent && (<div className="signup">
          <p>Não possui cadastro?</p>
          <Link to="/signup" className="link">Cadastre-se</Link>
        </div>)}
      </form>

    </div>
    <Footer />
    </>
  );
}