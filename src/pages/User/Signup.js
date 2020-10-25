import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import api from '../../services/api';
import pt from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/User/signup.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

registerLocale('pt', pt);

export default function Signup() {
  const [ nome, setNome ] = useState('');
  const [ cpf, setCPF ] = useState('');
  const [ nascimento, setNascimento ] = useState(new Date());
  const [ estado, setEstado ] = useState('');
  const [ municipio, setMunicipio ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmarSenha, setConfirmarSenha ] = useState('');

  const [ apiEstados, setApiEstados ] = useState([]);
  const [ apiMunicipios, setApiMunicipios ] = useState([]);

  const history = useHistory();

  useEffect(() => {
    api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(({data}) => {
        let resultado = data.map(value => ({sigla: value.sigla, nome: value.nome}));
        resultado = resultado.sort((a, b) => a.nome.localeCompare(b.nome));;
        setApiEstados(resultado);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if ( senha === confirmarSenha ) {
      api.post('/user/create', {
        nome, 
        cpf, 
        data_de_nascimento: nascimento, 
        estado, 
        municipio, 
        endereco, 
        telefone, 
        senha
      }).then(({data}) => {
        alert(data.message);
        history.push('/login');
      }).catch(({response: {data}}) => alert(data));
    }
  }

  async function handleSelectEstadosChange({target}) {
    await setEstado(target.value);
    api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${target.value}/municipios`)
    .then(({data}) => {
      setApiMunicipios(data.map(municipio => municipio.nome));
    })
  }

  return (
    <> 
      <Navbar />
      <div id="page-signup">
        <h1>Caderneta Digital<br />da Saúde da Criança</h1>
        <h4>Cadastro</h4>
        <p>Já possui cadastro?{" "}
          <Link to="/login" className="link">Entrar</Link>
        </p>

        <form onSubmit={handleSubmit} className="form-signup">

          <h5>Informações Pessoais</h5>
          <div className="form-group">
            <label htmlFor="nome">Digite seu nome completo</label>
            <input 
              type="text" 
              id="nome" 
              value={nome}
              onChange={({target}) => setNome(target.value)}
            />
          </div>
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
            <label htmlFor="nascimento">Selecione sua data de nascimento</label>
            <DatePicker 
              selected={nascimento} 
              onChange={date => setNascimento(date)}
              dateFormat="dd/MM/yyyy"
              locale="pt"
              dropdownMode="select"
              showYearDropdown={true}
            />
          </div>

          <div className="form-group-doubled">
            <div className="sub-form-group">
              <label htmlFor="municipio">Estado</label>
              <select id="municipio"
                value={estado}
                onChange={handleSelectEstadosChange}
              >
                {apiEstados.map(value => {
                  return (
                    <option value={value.sigla} key={value.sigla}>{value.nome}</option>
                  )
                })}
              </select>
            </div>
            <div className="sub-form-group">
              <label htmlFor="estado">Município</label>
              <select onChange={({target}) => setMunicipio(target.value)}>
                {apiMunicipios.map(value => {
                  return (
                    <option value={value}>{value}</option>
                  )
                })}
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="endereco">Digite seu endereço</label>
            <input 
              type="text" 
              id="endereco" 
              value={endereco}
              onChange={({target}) => setEndereco(target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Digite seu número de telefone</label>
            <input 
              type="text" 
              id="telefone" 
              value={telefone}
              onChange={({target}) => setTelefone(target.value)}
            />
          </div>

          <h5 style={{marginTop: 24}}>Informações da conta</h5>

          <div className="form-group">
            <label htmlFor="senha">Digite sua senha</label>
            <input 
              type="password" 
              id="senha" 
              value={senha}
              onChange={({target}) => setSenha(target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirme sua senha</label>
            <input 
              type="password" 
              id="confirmarSenha" 
              value={confirmarSenha}
              onChange={({target}) => setConfirmarSenha(target.value)}
            />
          </div>

          <button className="submit-button">Entrar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}