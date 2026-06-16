import React from 'react';
import { motion } from 'framer-motion';

const Credentials = () => {
  const certs = [
    { name: "AI for Beginners", org: "HP", date: "Jun 2025", link: "/hp-cert.pdf" },
    { name: "Data Analytics Job Simulation", org: "Deloitte", date: "Oct 2025", link: "/deloitte-cert.pdf" },
    { name: "React.js", org: "Infosys", date: "Nov 2025", link: "/infosys-cert.pdf" },
    { name: "Oracle Certified Foundations Associate", org: "Oracle", date: "Jun 2026", link: "/oracle-cert.pdf" },
    { name: "AWS Certified Cloud Practitioner", org: "AWS", date: "Jun 2026", link: "/aws-cert.pdf" },
    { name: "Linux Essentials", org: "Cisco", date: "Oct 2025", link: "/cisco-linux-cert.pdf" },
    { name: "Operating Systems Basics", org: "Cisco", date: "Sep 2025", link: "/cisco-os-cert.pdf" }
  ];

  return (
    <section className="certs-section" id="certs">
      <div className="container">
        <div className="sec-label">06 Credentials</div>
        <motion.h2
          className="certs-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Verified <em>expertise.</em>
        </motion.h2>

        <div className="certs-list">
          {certs.map((cert, idx) => {
            const rowContent = (
              <>
                <div className="cert-name-main">
                  {cert.name}
                  {cert.link && <span className="cert-view-hint">View Certificate ↗</span>}
                </div>
                <div className="cert-org-badge">{cert.org}</div>
                <div className="cert-date-label">{cert.date}</div>
              </>
            );

            return cert.link ? (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-row hover-target"
                key={idx}
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {rowContent}
              </motion.a>
            ) : (
              <motion.div
                className="cert-row hover-target"
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {rowContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
