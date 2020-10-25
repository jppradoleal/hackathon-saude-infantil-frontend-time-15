import React, { useState, useEffect, useContext } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import pt from 'date-fns/locale/pt-BR';

import UserContext from '../../context/UserContext';
import api from '../../services/api';

import 'react-datepicker/dist/react-datepicker.css';

import Sidebar from '../../components/Sidebar';

import '../../styles/dashboard.css';

registerLocale('pt', pt);

export default function Dashboard() {
  const history = useHistory();

  const {token} = useContext(UserContext);

  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState(new Date());
  const [sexo, setSexo] = useState('M');
  const [municipio, setMunicipio] = useState('');
  const [numeroDeclaracao, setNumeroDeclaracao] = useState('');
  const [firstPage, setFirstPage] = useState(true);

  const [ posts, setPosts ] = useState([]); 

  const [frutas, setFrutas] = useState('');
  const [refeicoes, setRefeicoes] = useState('');
  const [doces, setDoces] = useState('');
  const [industrializados, setIndustrializados] = useState('');

  useEffect(() => {
    api.get('/posts?postsByPage=3')
      .then(response => setPosts(response.data))
      .catch(err => console.error("Cant get posts"));
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
    api.post('/child', {
      nome,
      nascimento,
      sexo,
      municipio,
      numeroDeclaracao,
      frutas,
      refeicoes_na_mesa: refeicoes,
      doces,
      industrializados
    }, { headers: {'Authorization': 'Bearer ' + String(token) } } ).then(response => {
      alert('Child registered');
      history.push('/dashboard/data');
    }).catch(error => {
      alert('error');
      console.error(error.response.data);
      setFirstPage(true);
      return;
    })
  }

  return (
    <div className="container">
      <Sidebar />
      <main id="page-dashboard-register">
        <section className="register-section">
          <div>

            <h3>Acompanhamento</h3>
            <form onSubmit={handleSubmit}>
              <p className="indicador">Passo {firstPage ? 1 : 2} de 2</p>
              {firstPage ? (
                <>
                  <h5>Cadastro da criança</h5>

                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input 
                      type="text" 
                      id="nome"
                      value={nome}
                      onChange={({target}) => setNome(target.value)}
                    />
                  </div>
                  <div className="form-group doubled">
                    <div className="sub-group">
                      <label htmlFor="nascimento">Data de Nascimento</label>
                      <DatePicker 
                        selected={nascimento} 
                        onChange={date => setNascimento(date)}
                        dateFormat="dd/MM/yyyy"
                        locale="pt"
                        dropdownMode="select"
                        showYearDropdown={true}
                        id="nascimento"
                      />
                    </div>
                    <div className="sub-group">
                      <label 
                        htmlFor="sexo"
                        aria-label="Precisamos saber pois o calculo de IMC infantil diverge :)"
                      >Sexo</label>
                      <select
                        id="sexo"
                        value={sexo}
                        onChange={({target}) => setSexo(target.value)}
                      >
                        <option value="F">Menina</option>
                        <option value="M">Menino</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="municipio">Municipio</label>
                    <input 
                      type="text" 
                      id="municipio"
                      value={municipio}
                      onChange={({target}) => setMunicipio(target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numeroDeclaracao">Número de declaração de nascido vivo</label>
                    <input 
                      type="text" 
                      id="numeroDeclaracao"
                      value={numeroDeclaracao}
                      onChange={({target}) => setNumeroDeclaracao(target.value)}
                    />
                  </div>
                  <button 
                    type="button" 
                    className="button"
                    onClick={() => setFirstPage(false)}
                  >Continuar</button>
                </>
              ) : (
                <div>
                  <h5 style={{marginBottom: 24}}>Hábitos da criança</h5>

                  <div className="radio-group" onChange={({target}) => setFrutas(target.value)}>
                    <p>Frutas fazem parte da alimentação</p>
                    <div className="radios"> 
                      <div>
                        <input 
                          type="radio" 
                          name="frutas" 
                          value="nunca"
                          id="nunca" />
                        <label htmlFor="nunca">Nunca</label>  
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="frutas" 
                          value="raramente"
                          id="raramente" />
                        <label htmlFor="raramente">Raramente</label>
                      </div>
                      <div>  
                        <input 
                          type="radio" 
                          name="frutas" 
                          value="muitas vezes"
                          id="muitas vezes" />
                        <label htmlFor="muitasVezes">Muitas vezes</label>
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="frutas" 
                          value="sempre"
                          id="sempre" />
                        <label htmlFor="sempre">Sempre</label>
                      </div>
                    </div>
                  </div>

                  <div className="radio-group" onChange={({target}) => setRefeicoes(target.value)}>
                    <p>Costumamos fazer refeições sentados a mesa</p>
                    <div className="radios"> 
                      <div>
                        <input 
                          type="radio" 
                          name="refeicoes" 
                          value="nunca"
                          id="nunca" />
                        <label htmlFor="nunca">Nunca</label>  
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="refeicoes" 
                          value="raramente"
                          id="raramente" />
                        <label htmlFor="raramente">Raramente</label>
                      </div>
                      <div>  
                        <input 
                          type="radio" 
                          name="refeicoes" 
                          value="muitasVezes"
                          id="muitas vezes" />
                        <label htmlFor="muitasVezes">Muitas vezes</label>
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="refeicoes" 
                          value="sempre"
                          id="sempre" />
                        <label htmlFor="sempre">Sempre</label>
                      </div>
                    </div>
                  </div>

                  <div className="radio-group" onChange={({target}) => setDoces(target.value)}>
                    <p>Consome balas, chocolates e outras guloseimas</p>
                    <div className="radios"> 
                      <div>
                        <input 
                          type="radio" 
                          name="doces" 
                          value="nunca"
                          id="nunca" />
                        <label htmlFor="nunca">Nunca</label>  
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="doces" 
                          value="raramente"
                          id="raramente" />
                        <label htmlFor="raramente">Raramente</label>
                      </div>
                      <div>  
                        <input 
                          type="radio" 
                          name="doces" 
                          value="muitasVezes"
                          id="muitas vezes" />
                        <label htmlFor="muitasVezes">Muitas vezes</label>
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="doces" 
                          value="sempre"
                          id="sempre" />
                        <label htmlFor="sempre">Sempre</label>
                      </div>
                    </div>
                  </div>

                  <div className="radio-group" onChange={({target}) => setIndustrializados(target.value)}>
                    <p>Consome sucos industrializados, como de caixinha, em pó, garrafa ou lata </p>
                    <div className="radios"> 
                      <div>
                        <input 
                          type="radio" 
                          name="industrializados" 
                          value="nunca"
                          id="nunca" />
                        <label htmlFor="nunca">Nunca</label>  
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="industrializados" 
                          value="raramente"
                          id="raramente" />
                        <label htmlFor="raramente">Raramente</label>
                      </div>
                      <div>  
                        <input 
                          type="radio" 
                          name="industrializados" 
                          value="muitas vezes"
                          id="muitasVezes" />
                        <label htmlFor="muitasVezes">Muitas vezes</label>
                      </div> 
                      <div>
                        <input 
                          type="radio" 
                          name="industrializados" 
                          value="sempre"
                          id="sempre" />
                        <label htmlFor="sempre">Sempre</label>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="less-important"
                    onClick={() => setFirstPage(true)}
                  >Voltar</button>
                  <button>Salvar</button>
                </div>
              )}
            </form>
          </div>
          <div className="notas">
            <h5>Começando</h5>
            <p className={!firstPage ? 'active' : ''}>
              <span className="circle">&nbsp;</span> 
              Cadastro da Criança
            </p>
            <p>
              <span className="circle">&nbsp;</span>
              Hábitos da Criança
            </p>
          </div>
        </section>
        <section className="posts-section">
          <h5>Materiais recomendados</h5>
          <div className="posts">
                {posts.map(post => {
                  return (
                    <div className="post-card" key={post._id}>
                      <h5>{post.titulo}</h5>
                      <a href={post.link} rel="noreferrer noopener" className="a-link">Leia mais &gt;</a>
                    </div>
                  )
                })}
          </div>
        </section>
      </main>
    </div>
  );
}