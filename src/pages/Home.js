import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import api from '../services/api';

import '../styles/home.css';

import calendarImg from '../images/undraw_calendar.svg';
import calculatorImg from '../images/undraw_calculator.svg';

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('/posts?page=0&postsByPage=2').then(response => {
      setPosts(response.data);
    })
  }, [])

  return (
    <div className="container">
      <Navbar />
      <main id="page-home">
        <section className="first-section">
          {posts.map(post => {
            return (
              <div className="post-cell">
                <img src={post.caminho_da_imagem} />
                <div>
                  <h4>{post.titulo}</h4>
                  <p>{post.descricao}</p>
                  <a>Leia mais{" "}
                  <FiArrowRight size={16} color="#2846CA"/></a>
                </div>
              </div>
            )
          })}
        </section>
        <section className="second-section">
          <h1>Funcionalidades</h1>
          <div className="flex">
            <div className="text-description">
              <h3>Calendário de Vacinação</h3>
              <p>Acompanhe o Calendário Nacional de Vacinação com os nomes de todas
as vacinas que seu filho(a) precisa tomar para ficar protegido contra doenças.</p>
            </div>
            <img className="thumbnail" src={calendarImg} width="300" alt=""/>
          </div>
          <div className="flex reverse">
            <div className="text-description">
              <h3>Calculadoras de desenvolvimento</h3>
              <p>Acompanhe o Calendário Nacional de Vacinação com os nomes de todas
as vacinas que seu filho(a) precisa tomar para ficar protegido contra doenças.</p>
            </div>
            <img className="thumbnail" src={calculatorImg} width="300" alt=""/>
          </div>
        </section>
        <section className="third-section">
          <h1>A maneira mais fácil de acompanhar a saúde e desenvolvimento da criança</h1>
          <Link className="link" to="/login">Começar</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}