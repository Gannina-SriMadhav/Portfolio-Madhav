import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="exp-section" id="experience">
      <div className="container">
        <div className="sec-label">02 Experience</div>
        
        <motion.h2 
          className="exp-mega"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Where I've built <em>real things</em> that matter.
        </motion.h2>

        <motion.div 
          className="exp-card hover-target"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="exp-meta">
            <div className="exp-company">RamTech Solutions LLC</div>
            <div className="exp-period">Dec 2025 - Feb 2026</div>
            <div className="exp-role-name">Data Analytics Intern</div>
            <a 
              href="/ramtech-cert.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="exp-cert-btn hover-target"
            >
              View Certificate
            </a>
          </div>
          <ul className="exp-points">
            <li>Built an interactive Healthcare Analytics Dashboard in Tableau, visualizing hospital datasets across treatment costs, hospital ratings, and procedure costs, enabling data-driven healthcare performance benchmarking at scale.</li>
            <li>Transformed raw, unstructured healthcare CSV data into structured visual insights, uncovering cost patterns across 3+ key metrics and presenting findings directly to stakeholders.</li>
            <li>Automated data cleaning and preprocessing workflows in Python, cutting manual effort significantly while ensuring consistent reporting accuracy across all delivery cycles.</li>
          </ul>
        </motion.div>
          <motion.div 
            className="exp-card hover-target"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="exp-meta">
              <div className="exp-company">Hackathon</div>
              <div className="exp-period">Recent</div>
              <div className="exp-role-name">Fraud Detection System</div>
              <a 
                href="/hackathon-cert.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="exp-cert-btn hover-target"
              >
                View Certificate
              </a>
            </div>
            <ul className="exp-points">
              <li>Collaborated in a competitive, fast-paced hackathon environment to design and develop a robust Fraud Detection System from scratch.</li>
              <li>Engineered data processing pipelines and implemented algorithms to rapidly identify anomalous and potentially fraudulent patterns in datasets.</li>
              <li>Showcased the ability to deliver functional, high-impact technical solutions under strict time constraints and pressure.</li>
            </ul>
          </motion.div>
      </div>
    </section>
  );
};

export default Experience;
