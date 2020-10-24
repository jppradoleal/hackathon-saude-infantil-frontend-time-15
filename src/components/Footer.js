import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/footer.css'

export default function Footer() {
  return( 
    <footer id="footer">
      <div>
        <h2>Sobre</h2>
        <Link className="link">Publicidade</Link>
        <Link className="link">Imprensa</Link>
        <Link className="link">Política de Privacidade</Link>
        <Link className="link">Termos de uso</Link>
        <Link className="link">Ajuda</Link>
      </div>
      <div>
        <h2>Calculadoras</h2>
        <Link className="link">Calculadoras IMC</Link>
        <Link className="link">Antropométrico</Link>
      </div>
    </footer>
  );
}