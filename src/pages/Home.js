import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../styles/home.css';

import calendarImg from '../images/undraw_calendar.svg';
import calculatorImg from '../images/undraw_calculator.svg';
import cartilhaImg from '../images/cartilha.png';
import cardOneImg from '../images/image-card-2.png';
import cardTwoImg from '../images/image-card-1.png';

export default function Home() {

  return (
    <div className="container">
      <Navbar />
      <main id="page-home">
        <section className="first-section">
          <div className="row">
            <div>
              <h1>Caderneta digital da saúde da criança</h1>
              <p>Acompanhe o desenvolvimento saudável da criança e receba os melhores conteúdos sobre o assunto.</p>
              <Link className="link" to="">Cadastrar</Link>
            </div>
            <img src={cartilhaImg} alt=""/>
          </div>
          <div className="row cards" style={{height: "70vh"}}>
            <div className="card">
              <img src={cardOneImg} alt="" />
              <div>
                <h4>Para pais e responsáveis</h4>
                <p>Acompanhe a saúde e desenvolvimento do seu filho(a)</p>
                <Link to="" className="text-link">
                  Leia mais <FiArrowRight size={16} color="#2846CA" />
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={cardTwoImg} alt="" />
              <div>
                <h4>Para profissionais da saúde</h4>
                <p>Registre e acompanhe as informações mais fácil.</p>
                <Link to="" className="text-link">
                  Leia mais <FiArrowRight size={16} color="#2846CA" />
                </Link>
              </div>
            </div>
          </div>
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