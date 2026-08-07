import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

// Componente Interno de Ícones (SVGs Puros)
const Icons = {
  WhatsApp: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
  ),
  ArrowUpRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  )
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      
      {/* SEÇÃO CTA (CALL TO ACTION) */}
      <section className="cta-section">
        <div className="cta-container">
          <motion.div 
            className="cta-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Pronto para transformar sua ideia em um projeto de sucesso?</h2>
            <p>Vamos conversar sobre o seu projeto!</p>
          </motion.div>

          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="https://wa.me/71996158874" target="_blank" rel="noreferrer" className="btn-whatsapp">
              <Icons.WhatsApp />
              Falar no WhatsApp
            </a>
            <a href="#portfolio" className="btn-projects">
              Ver projetos
              <Icons.ArrowUpRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* RODAPÉ FINAL */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          
          <div className="footer-logo-copy">
            <span className="footer-logo">AP</span>
            <p>© {currentYear} Anabelly Passos. Todos os direitos reservados.</p>
          </div>

          <nav className="footer-nav">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#about">Sobre mim</a>
          </nav>

          <div className="footer-socials">
            <a href="https://www.instagram.com/anabelly_passos/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icons.Instagram />
            </a>
            <a href="https://www.linkedin.com/in/anabelly-passos-a4b44623b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icons.Linkedin />
            </a>
            <a href="https://wa.me/71996158874" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icons.Phone />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;