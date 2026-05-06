import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon, Download } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          AI & Data Science Engineer
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Sri<br /><em>Madhav</em><br />Gannina
        </motion.h1>

        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          B.Tech student in Artificial Intelligence & Data Science at KL University, building intelligent, scalable software from the ground up, with a 9.3 GPA and real-world results to back it.
        </motion.p>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="hero-tag accent">Python</span>
          <span className="hero-tag">React.js</span>
          <span className="hero-tag">Data Analytics</span>
          <span className="hero-tag">Full-Stack Dev</span>
          <span className="hero-tag">Tableau</span>
          <span className="hero-tag">Java</span>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#contact" className="btn-primary hover-target">
            <span>Let's Talk</span>
            <ArrowRight size={16} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary hover-target">
            <Download size={16} />
            <span>Resume</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div>
            <div className="stat-num">9.3<sup>/10</sup></div>
            <div className="stat-lbl">CGPA</div>
          </div>
          <div>
            <div className="stat-num">4<sup>+</sup></div>
            <div className="stat-lbl">Live Projects</div>
          </div>
          <div>
            <div className="stat-num">5</div>
            <div className="stat-lbl">Certifications</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="hero-image-wrapper">
          {/* 
            To add your photo, remove the 'hero-image-placeholder' div below 
            and uncomment the img tag, replacing the src with your image path.
            
            <img src="/your-photo.jpg" alt="Sri Madhav" />
          */}
          <img src={heroImg} alt="Sri Madhav" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
