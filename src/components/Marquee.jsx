import React from 'react';

const Marquee = () => {
  const items = [
    { text: "Python", isAccent: true },
    { text: "React.js", isAccent: true },
    { text: "Data Analytics", isAccent: true },
    { text: "Tableau", isAccent: true },
    { text: "Full-Stack Dev", isAccent: true },
    { text: "Java", isAccent: true },
    { text: "Node.js", isAccent: true },
    { text: "Spring Boot", isAccent: true },
    { text: "SQL", isAccent: true },
    { text: "Machine Learning", isAccent: true },
  ];

  const renderItems = () => (
    <>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span>{item.text}</span>
          <span className="accent">✦</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
};

export default Marquee;
