import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="edu-section" id="education">
      <div className="container">
        <div className="sec-label">05 Education</div>
        
        <div className="edu-grid">
          <motion.div 
            className="edu-card hover-target"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="edu-sub">B.Tech - AI & Data Science</div>
            <div className="edu-degree">KL University</div>
            <div className="edu-inst">Andhra Pradesh, India</div>
            <div className="edu-period">Jul 2024 - May 2028</div>
            <div className="edu-score">9.3 <small>/ 10 CGPA</small></div>
          </motion.div>
          
          <motion.div 
            className="edu-card hover-target"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="edu-sub">Intermediate - Class XII</div>
            <div className="edu-degree">Tirumala Junior College</div>
            <div className="edu-inst">Andhra Pradesh, India</div>
            <div className="edu-period">Jun 2022 - May 2024</div>
            <div className="edu-score">88.4<small>% Aggregate</small></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
