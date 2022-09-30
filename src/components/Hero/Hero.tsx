import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="introduction">
        <div className="section-title">
          <img
            className="img-circle"
            src="../icons/interaction-desgin-circle.png"
            alt=""
          />
          <h3>Interaction Design Apprenticeship</h3>
          <div className="subtitle">
            A fully funded work-study program to launch your tech career
          </div>
          <div className="content">
            Harbour.Space has partnered with SCG to empower driven talent and
            eliminate the barriers to accessing exceptional education and career
            opportunities through a Masters Fellowship.
          </div>
          <div className="position">
            <b>Position</b>: Marketing Performance
          </div>
          <div className="apply-cta">
            <button type="button" className="primary-button">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="application-status">
        <div className="powered-by">
          <img
            className="zeptolab-logo"
            src="../icons/elephant.png"
            alt="Powered By Zeptolab"
          />
          <div className="zeptolab-title">
            <span className="by">Powered by:</span>
            <span className="value">Zeptolab</span>
          </div>
        </div>
        <div className="application-closes">
          <div className="app-title">Application closes in</div>
          <div className="app-value">6 Day : 22 Hrs : 56 Min : 13 Seg </div>
        </div>
        <div className="application-more-info">
          <div className=" left-section">
            <div className="card-info location">
              <div className="card-title">Location</div>
              <div className="card-value">Bangkok</div>
            </div>
            <div className="card-info start-date">
              <div className="card-title">Start Date</div>
              <div className="card-value">30 June 2020</div>
            </div>
          </div>
          <div className="right-section">
            <div className=" duration">
              <div className="card-title">Duration</div>
              <div className="card-value">
                1 Year <div> Full-Time</div>
              </div>
            </div>
            <div className="card-info end-date">
              <div className="card-title">End Date</div>
              <div className="card-value">3 Aug 2020</div>
            </div>
            <div className="mesh-background">
              <img src="../icons/mesh.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
