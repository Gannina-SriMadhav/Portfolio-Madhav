import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      num: "01",
      name: "Interactive Data Analytics Dashboard",
      desc: "Multi-view Tableau dashboard with dynamic filters, charts, and graphs enabling exploratory trend analysis across complex datasets. Delivered actionable business insights supporting non-technical stakeholders.",
      tags: ["Tableau", "BI", "Jan–May 2025"]
    },
    {
      num: "02",
      name: "Career Assessment Tool",
      desc: "React.js web app mapping user interests and skills to curated career paths via a rule-based recommendation engine. Clean, accessible UI with personalized output panels for students and early-career seekers.",
      tags: ["React.js", "Node.js", "MongoDB", "Aug–Dec 2025"],
      liveLink: "https://career-assessment-tool-2.onrender.com/",
      githubLink: "https://github.com/Gannina-SriMadhav/Career-Assessment-Tool"
    },
    {
      num: "03",
      name: "Medical Virtual Consultation Platform",
      desc: "Full-stack healthcare platform for virtual patient-doctor consultations, appointment management, and digital prescriptions. RBAC for four roles (Doctor, Patient, Pharmacist, Admin) with complete module-level workflows.",
      tags: ["Full-Stack", "RBAC", "Dec 2025–Jan 2026"]
    },
    {
      num: "04",
      name: "Data Analytics Dashboard for Business Insights",
      desc: "Python-based analytics dashboard using Matplotlib and Seaborn. End-to-end data pipeline including ingestion, cleaning, EDA, and visual reporting, reducing time-to-insight for business stakeholders significantly.",
      tags: ["Python", "Seaborn", "Jan–Feb 2026"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="sec-label">04 Projects</div>
        
        <motion.h2 
          className="projects-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Things I've <em>shipped</em><br />from scratch.
        </motion.h2>

        <div className="projects-list">
          {projects.map((proj, idx) => (
            <motion.div 
              className="project-row hover-target"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="proj-num">{proj.num}</div>
              <div>
                <div className="proj-name">
                  {proj.name}
                  {proj.liveLink && <ArrowUpRight size={24} className="proj-arrow" strokeWidth={1.5} />}
                </div>
                <p className="proj-desc">{proj.desc}</p>
                {(proj.liveLink || proj.githubLink) && (
                  <div className="proj-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem' }}>
                    {proj.liveLink && (
                      <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="proj-link-btn hover-target">
                        Live Demo ↗
                      </a>
                    )}
                    {proj.githubLink && (
                      <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="proj-link-btn hover-target">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="proj-tags">
                {proj.tags.map((tag, tIdx) => (
                  <span className="proj-tag" key={tIdx}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
