import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './portfolio.css';

// 1. Limpei os dados: troquei a função onclick por uma string 'link'
const projectsData = [
  {
    image: 'src/assets/imag-projects/siteadv1.svg',
    category: "Site Institucional",
    title: "Advocacia",
    link: "https://site-advocacia2.vercel.app/" 
  },
  {
    image: 'src/assets/imag-projects/Clinicadentista.png',
    category: "E-commerce",
    title: "Loja de Produtos Naturais",
    link: "https://clinica-sorriso-sable.vercel.app/" 
  },
  {
    image: 'src/assets/imag-projects/office.png',
    category: "Sistema Web",
    title: "Organizador de tarefas e editor de textos com IA",
    link: "https://office-magic.vercel.app/"
  },
  {
    image: 'src/assets/imag-projects/Clinica.png',
    category: "Site Institucional",
    title: "Clinica Odontológica",
    link: "https://arco-odontologia.vercel.app/"
  },
];

const Portfolio = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // 2. Função para lidar com o clique
  const handleProjectClick = (url) => {
    if (url && url !== '#') {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2>Projetos em destaque</h2>
            <p>Alguns trabalhos que geraram resultados incríveis.</p>
          </div>
          <a href="/todos-projetos" className="all-projects-link">
            Ver todos os projetos <ArrowRight size={18} />
          </a>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              
              // 3. AQUI ESTÁ A MÁGICA:
              onClick={() => handleProjectClick(project.link)}
              style={{ cursor: 'pointer' }} // Garante que mostre a "mãozinha" no mouse
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;