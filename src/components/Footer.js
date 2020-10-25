import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/footer.css'

export default function Footer() {
  return( 
    <footer id="footer">
      <div>
        <h2>Sobre</h2>
        <Link className="link" to="">Publicidade</Link>
        <Link className="link" to="">Imprensa</Link>
        <Link className="link" to="">Política de Privacidade</Link>
        <Link className="link" to="">Termos de uso</Link>
        <Link className="link" to="">Ajuda</Link>
      </div>
      <div>
        <h2>Calculadoras</h2>
        <Link 
          className="link" 
          to="https://endocalc.com.br/IMC.html"
          rel="noopener noreferrer"
          target="_blank"  
        >Calculadoras IMC</Link>
        <Link 
          className="link" 
          to="https://endocalc.com.br/dmgpercentilpeso.html"
          rel="noopener noreferrer"
          target="_blank"  
        >Antropométrico</Link>
      </div>
      <div>
        <h2>Materiais</h2>
        <Link className="link" to="">Estimulando o desenvolvimento</Link>
        <Link className="link" to="">Alimentação saudável</Link>
        <Link className="link" to="">Cuidados com a criança</Link>
      </div>
    </footer>
  );
}