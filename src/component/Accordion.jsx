import { useState } from "react";
import "../css/body.css";

const Accordion = ({ title, children, isActive, onShow }) => {
  return (
    <>
      <div className="accordion">
        <div className="accordion_heading" onClick={onShow}>
          <h5>{title}</h5>
          <span>⬇</span>
        </div>
        {isActive && <div className="accordion_body">{children}</div>}
      </div>
    </>
  );
};

export default Accordion;
