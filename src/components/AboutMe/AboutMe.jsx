import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Target, Heart, ShieldCheck } from 'lucide-react';
import './AboutMe.css';
import minhaFoto from '../../assets/imgAbout/AboutMe.svg';
const AboutMe = () => {
  const features = [
    { icon: Award, text: "3+ anos de experiência" },
    { icon: Target, text: "Foco em resultados" },
    { icon: Heart, text: "Atendimento personalizado" },
    { icon: ShieldCheck, text: "Soluções completas" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* LADO ESQUERDO: IMAGEM */}
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 
              SUBSTITUA O 'src' ABAIXO PELA SUA FOTO 
              Exemplo: src={minhaFoto} ou src="/assets/suafoto.jpg"
          */}
          <img 
            src={minhaFoto} 
            alt="Sua Foto" 
            className="about-image" 
          />
          <div className="image-decorator"></div>
        </motion.div>

        {/* LADO DIREITO: TEXTO E CARDS */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-header">
            <h2>Sobre mim <Sparkles size={24} className="sparkle-icon" /></h2>
            <p className="about-subtitle">Apaixonada por tecnologia, design e resultados.</p>
          </div>

          <div className="about-text">
            <p>
              Sou desenvolvedora e designer UI · UX com mais de 3 anos de experiência 
              criando soluções digitais que unem estética, funcionalidade e estratégia.
            </p>
            <p>
              Meu objetivo é ajudar empresas e profissionais a terem presença digital 
              de verdade e resultados que fazem a diferença.
            </p>
          </div>

          {/* GRID DE CARDS PEQUENOS */}
          <div className="about-features-grid">
            {features.map((item, index) => (
              <div className="feature-mini-card" key={index}>
                <div className="feature-icon-wrapper">
                  <item.icon size={20} />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;