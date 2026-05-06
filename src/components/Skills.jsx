import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="sec-label">03 Capability</div>
        
        <motion.h2 
          className="skills-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          The <em>full stack</em> of what I bring.
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="skill-col hover-target" variants={itemVariants}>
            <div className="skill-col-label">Languages</div>
            <div className="skill-items">
              <div className="skill-item">Python 3</div>
              <div className="skill-item">Java</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">SQL</div>
            </div>
          </motion.div>
          
          <motion.div className="skill-col hover-target" variants={itemVariants}>
            <div className="skill-col-label">Web Dev</div>
            <div className="skill-items">
              <div className="skill-item">React.js</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Spring Boot</div>
              <div className="skill-item">HTML5 / CSS3</div>
            </div>
          </motion.div>
          
          <motion.div className="skill-col hover-target" variants={itemVariants}>
            <div className="skill-col-label">ML & Data</div>
            <div className="skill-items">
              <div className="skill-item">Data Analysis</div>
              <div className="skill-item">EDA</div>
              <div className="skill-item">Pandas / NumPy</div>
              <div className="skill-item">Visualization</div>
            </div>
          </motion.div>
          
          <motion.div className="skill-col hover-target" variants={itemVariants}>
            <div className="skill-col-label">Tools</div>
            <div className="skill-items">
              <div className="skill-item">Tableau</div>
              <div className="skill-item">Git / GitHub</div>
              <div className="skill-item">VS Code</div>
              <div className="skill-item">Render / PyCharm</div>
            </div>
          </motion.div>
          
          <motion.div className="skill-col hover-target" variants={itemVariants}>
            <div className="skill-col-label">Concepts</div>
            <div className="skill-items">
              <div className="skill-item">Full-Stack Dev</div>
              <div className="skill-item">REST APIs</div>
              <div className="skill-item">RBAC</div>
              <div className="skill-item">Agile / OOP</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
