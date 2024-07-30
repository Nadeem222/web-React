import React, { useState } from "react";
import "./Accordion.css"

const Accordion = ({ items }) => {
  // console.log(items)
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log(index, activeIndex);
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItmes = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    // console.log(item , index);

    return (
      <div key={item.title} className={`accordion-item ${active}`}>
        <div className="accordion-title" onClick={() => onTitleClick(index)}>
          <span>{item.title}</span>
          <span>{active ? "-" : "+"}</span>
        </div>
        <div className="accordion-content">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="accordion">{renderItmes}</div>;
};

export default Accordion;
