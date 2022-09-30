import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="title">
        Harbour.Space
        <span className="small">/Interaction Design</span>
      </div>
      <div className="menu">
        <div className="icon-item"></div>
        <div className="icon-item"></div>
        <div className="icon-item"></div>
      </div>
      <div className="apply-now">
        <span>Apply</span>
        <span>Now</span>
      </div>
    </div>
  );
}
