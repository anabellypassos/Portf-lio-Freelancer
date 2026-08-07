import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShoppingBag, Laptop, PenTool } from 'lucide-react';
import './services.css';

const servicesData = [
  {
    icon: <Code2 size={32} />,
    title: "Sites Institucionais",
    description: "Sites profissionais, responsivos e otimizados para atrair clientes."
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Lojas Virtuais",
    description: "E-commerces completos integrados com pagamento e frete."
  },
  {
    icon: <Laptop size={32} />,
    title: "Sistemas Web",
    description: "Soluções personalizadas para automatizar e organizar seu negócio."
  },
  {
    icon: <PenTool size={32} />,
    title: "UI · UX Design",
    description: "Interfaces modernas, intuitivas e focadas na melhor experiência do usuário."
  }
];

const Services = () => {
  return (
    <section className="services-section" id="servicos">
      <div className="services-container">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="star-icon">✦</span>
          <h2>O que eu faço</h2>
          <p>Soluções completas para o seu negócio crescer no digital.</p>
        </motion.div>

        {/* GRID DE CARDS */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Animação em cascata
              whileHover={{ y: -10 }} // Sobe um pouco ao passar o mouse
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;