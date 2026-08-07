import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './nav-bar.css';

const NavBar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para abrir/fechar
  const toggleMenu = () => setMenuAberto(!menuAberto);

  // Função para fechar ao clicar no link
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className={`nav-bar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-bar-container">
        
        <div className="nav-bar-logo">
          <div className="logo-icon">AP</div>
          <div className="logo-text">
            <span className="brand-name">ANABELLY PASSOS</span>
            <span className="brand-sub">SITES | SISTEMAS | UI · UX</span>
          </div>
        </div>

        <nav className="nav-bar-desktop">
          <ul className="nav-bar-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#process">Processo</a></li>
          </ul>
        </nav>

        <div className="nav-bar-cta">
          <a href="https://wa.me/71996158874" className="btn-conversa" target="_blank" rel="noreferrer">
            Vamos conversar <MessageCircle size={18} />
          </a>
        </div>

        {/* BOTÃO HAMBÚRGUER CORRIGIDO */}
        <button 
          className={`nav-bar-hamburger ${menuAberto ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          {menuAberto ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <nav className={`nav-bar-mobile ${menuAberto ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={fecharMenu}>Início</a></li>
          <li><a href="#servicos" onClick={fecharMenu}>Serviços</a></li>
          <li><a href="#portfolio" onClick={fecharMenu}>Portfólio</a></li>
          <li><a href="#sobre" onClick={fecharMenu}>Sobre mim</a></li>
          <li><a href="#processo" onClick={fecharMenu}>Processo</a></li>
          <li className="mobile-cta">
            <a href="https://wa.me/seunumero" className="btn-conversa" onClick={fecharMenu}>
              Vamos conversar <MessageCircle size={18} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;