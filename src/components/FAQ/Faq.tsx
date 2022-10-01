import React, { useEffect } from "react";
import Collapse from "./components/Collapse/Collapse";

import "./Faq.css";

export default function Faq() {
  return (
    <div className="faq">
      <div className="header">
        <div className="title text-primary">Frequently asked questions</div>
        <div className="filter">
          <span>filter by:</span>
          <div className="actual-filter">
            <span>selected Text</span>
            <ul className="select">
              <li>Program Conditions</li>
              <li>All</li>
              <li>Admissions</li>
              <li>Harbour.Space</li>
              <li>SCG</li>
              <li>Living in Bangkok</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="body">
        <div className="collapsibles">
          <Collapse />
          <Collapse />
          <Collapse />
          <Collapse />
        </div>
      </div>
    </div>
  );
}
