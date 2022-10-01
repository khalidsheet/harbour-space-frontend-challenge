import React from "react";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottomNav">
      <div className="section">
        <div className="title">Zeptolab</div>
        <div className="content">Marketing Performance</div>
      </div>
      <div className="section">
        <div className="title">Location</div>
        <div className="content">Bangkok</div>
      </div>
      <div className="section">
        <div className="title">Duration</div>
        <div className="content">1 Year Full-Time</div>
      </div>
      <div className="section">
        <div className="title">Start date</div>
        <div className="content">3 Aug 2020</div>
      </div>
      <div className="section">
        <div className="title">Application deadline</div>
        <div className="content">30 June 2020</div>
      </div>
      <div className="section">
        <div className="title">Application closes in</div>
        <div className="content">6 Day : 22 Hrs : 56 Min</div>
      </div>
    </div>
  );
}
