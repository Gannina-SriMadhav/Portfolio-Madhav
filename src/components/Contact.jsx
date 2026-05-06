import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="sec-label">08 Contact</div>

        <motion.h2
          className="contact-big"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Let's<br />build <em>something</em><br />great.
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            className="contact-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-block-label">Email</div>
            <a href="mailto:madhav.gannina21@gmail.com" className="contact-block-val hover-target">madhav.gannina21@gmail.com</a>
          </motion.div>

          <motion.div
            className="contact-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-block-label">Phone</div>
            <a href="tel:+918309969100" className="contact-block-val hover-target">+91 83099 69100</a>
          </motion.div>

          <motion.div
            className="contact-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact-block-label">LinkedIn</div>
            <a href="https://www.linkedin.com/in/madhavgannina/" target="_blank" rel="noopener noreferrer" className="contact-block-val hover-target">linkedin.com/in/srimadh...</a>
          </motion.div>

          <motion.div
            className="contact-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-block-label">GitHub</div>
            <a href="https://github.com/Gannina-SriMadhav" target="_blank" rel="noopener noreferrer" className="contact-block-val hover-target">github.com/srimad...</a>
          </motion.div>
        </div>

        <div className="footer-bar">
          <div className="footer-copy">© 2026 Sri Madhav Gannina | Rajahmundry, Andhra Pradesh, India</div>
          <div className="footer-copy" style={{ color: 'var(--orange)' }}>Open to internships & full-time roles</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
