import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
  const activities = [
    {
      icon: "🎪",
      title: "Samyak Fest - Stage Director",
      body: "Coordinated protocol, guest management, and real-time stage execution for 1,000+ attendees at KL University's Techno-Management Fest."
    },
    {
      icon: "🎯",
      title: "Event Lead - Tech & Non-Tech",
      body: "Led planning and volunteer coordination for both technical and non-technical events at Samyak Fest, driving end-to-end execution across all divisions."
    },
    {
      icon: "🌾",
      title: "Social Internship - Agriculture",
      body: "Conducted farmer interactions and studied sustainable farming practices to understand real-world community infrastructure needs on the ground."
    },
    {
      icon: "🎮",
      title: "Gaming Club & CodeChef",
      body: "Active in e-sports and competitive programming on CodeChef, continuously sharpening algorithms and data structures under live contest pressure."
    }
  ];

  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <div className="sec-label">07 Beyond Code</div>
        <motion.h2 
          className="activities-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          I lead, organize, <em>and compete.</em>
        </motion.h2>

        <div className="activity-grid">
          {activities.map((act, idx) => (
            <motion.div 
              className="activity-card hover-target" 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <span className="activity-icon">{act.icon}</span>
              <div className="activity-title">{act.title}</div>
              <p className="activity-body">{act.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
