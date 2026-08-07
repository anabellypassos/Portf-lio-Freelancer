import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, PenTool, Code2, Rocket } from 'lucide-react';
import './WorkProcess.css';

const steps = [
  { 
    number: '01', 
    title: 'Descoberta', 
    desc: 'Entendo seu negócio, objetivos e público-alvo.', 
    icon: MessageSquare 
  },
  { 
    number: '02', 
    title: 'Planejamento', 
    desc: 'Defino a estratégia, estrutura e experiências.', 
    icon: ClipboardList 
  },
  { 
    number: '03', 
    title: 'Design', 
    desc: 'Crio layouts modernos e interfaces intuitivas.', 
    icon: PenTool 
  },
  { 
    number: '04', 
    title: 'Desenvolvimento', 
    desc: 'Transformo o design em código de qualidade.', 
    icon: Code2 
  },
  { 
    number: '05', 
    title: 'Entrega & Suporte', 
    desc: 'Lançamento e suporte contínuo para evoluir.', 
    icon: Rocket 
  },
];

const WorkProcess = () => {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        
        {/* Título da Seção */}
        <div className="process-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Como eu trabalho
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Um processo claro, estratégico e colaborativo.
          </motion.p>
        </div>

        {/* Grid de Passos */}
        <div className="process-grid">
          {/* Linha pontilhada (apenas desktop) */}
          <div className="process-line"></div>

          {steps.map((step, index) => (
            <motion.div 
              className="process-step" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }} // Efeito cascata
            >
              <div className="icon-container">
                <div className="icon-circle">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="step-badge">{step.number}</span>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;