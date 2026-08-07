import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Code, Layout, Target } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import './hero.css';

// Importando as imagens de fundo
import bg1 from '../../assets/fundo-1.svg';
import bg2 from '../../assets/fundo-2.svg';
import bg3 from '../../assets/fundo-3.svg';

const Hero = () => {
  return (
    <section className="hero-section" id="inicio">
      {/* O SLIDER DE FUNDO */}
      <div className="hero-background-slider">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="swiper-bg"
        >
          <SwiperSlide><div className="bg-slide" style={{ backgroundImage: `url(${bg1})` }}></div></SwiperSlide>
          <SwiperSlide><div className="bg-slide" style={{ backgroundImage: `url(${bg2})` }}></div></SwiperSlide>
          <SwiperSlide><div className="bg-slide" style={{ backgroundImage: `url(${bg3})` }}></div></SwiperSlide>
        </Swiper>
      </div>

      {/* CONTEÚDO FIXO POR CIMA DO SLIDER */}
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* LADO ESQUERDO: TEXTOS */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <span>✨ Sites que geram clientes e soluções que transformam ideias em resultados.</span>
            </div>
            <h1>Sites, Sistemas e <span>Experiências Digitais</span> que conectam e vendem</h1>
            <p>Desenvolvimento de sites, sistemas web e interfaces estratégicas com foco em performance, usabilidade e conversão.</p>
            
            <div className="hero-btns">
              <a href="#portfolio" style={{textDecoration: "none"}}>
                <button className="btn-pink"  > Ver projetos <ArrowUpRight size={20}/></button>
              </a>
                <a href="https://wa.me/71996158874" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                  <button className="btn-outline" >Falar no WhatsApp <MessageCircle size={20}/></button>
                </a>
            </div>
          </motion.div>

          {/* CENTRO: Minha foto */}
          <motion.div 
            className="hero-person"
            initial={{ opacity: 0, s: 0.8 }}
            animate={{ opacity: 1, s: 1 }}
            transition={{ duration: 1 }}
          >
          </motion.div>

          {/* LADO DIREITO: CARDS */}
          <div className="hero-cards">
            <motion.div className="card-item" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="c-icon"><Code size={22}/></div>
              <div className="c-txt"><strong>Desenvolvimento</strong><span>Sites e Sistemas</span></div>
            </motion.div>

            <motion.div className="card-item" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <div className="c-icon"><Layout size={22}/></div>
              <div className="c-txt"><strong>UI · UX Design</strong><span>Interfaces que encantam</span></div>
            </motion.div>

            <motion.div className="card-item" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <div className="c-icon"><Target size={22}/></div>
              <div className="c-txt"><strong>Estratégia Digital</strong><span>Foco em conversão</span></div>
            </motion.div>

            <div className="card-float-pink">
               <span>Soluções completas do planejamento à entrega</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;