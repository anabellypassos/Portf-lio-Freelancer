import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react'; 
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    text: "Entregue antes do prazo e com excelente qualidade. Recomendo.",
    name: "Adriano C.",
    role: "Criação de página web estática e multilíngue para aplicativo jurídico com IA",
  },
  {
    id: 2,
    text: "Muito atenciosa, recomendo",
    name: "Eber A.",
    role: "Criar protótipo de app de força de vendas",
  },
  {
    id: 3,
    text: "Projeto excelente. Entregue com pontualidade e qualidade. Recomendo.",
    name: "Adriano C.",
    role: "Criar telas de um projeto no Figma",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Título da Seção */}
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>O que dizem meus clientes</h2>
        </motion.div>

        {/* Grid de Depoimentos */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              className="testimonial-card" 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Ícone de Aspas */}
              <div className="quote-icon">
                <Quote size={28} fill="#fce7f3" stroke="none" />
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              {/* Info do Cliente com ÍCONE em vez de FOTO */}
              <div className="client-info">
                <div className="client-avatar-icon">
                  <User size={22} strokeWidth={1.5} />
                </div>
                <div className="client-details">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;