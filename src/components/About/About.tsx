import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="image-overview">
          <img className="student-image" src="../icons/student.png" alt="" />
        </div>
        <div className="about-content-text">
          <div className="content-title">About the apprenticeship</div>
          <div className="content-body">
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card scholarship-value">
          <div className="card-title text-primary">Scholarship value</div>
          <div className="card-fee text-secondary">&euro;31,300</div>
          <div className="middle-line"></div>
          <div className="additional-info">
            <div className=" left-section">
              <div className="card-info tuition-covered">
                <div className="card-title">Tuition covered</div>
                <div className="card-value text-secondary">&euro;20,900</div>
              </div>
              <div className="card-info remaining">
                <div className="card-title">Remaining</div>
                <div className="card-value text-secondary">&euro;2,000</div>
              </div>
            </div>
            <div className="right-section">
              <div className=" duration">
                <div className="card-title">Living stipend</div>
                <div className="card-value text-secondary">
                  &euro;8,400 (&euro;700/month)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="others">
          <div className="commitment-group">
            <div className="card study-commitment">
              <div className="card-title text-primary">Study commitment</div>
              <div className="subtitle text-secondary">3 hours / day</div>
              <div className="line"></div>
              <div className="description text-secondary">
                You will complete 15 modules to graduate. Daily classes are 3
                hours, plus coursework to complete in your own time.{" "}
              </div>
            </div>
            <div className="card work-commitment">
              <div className="card-title text-primary">Work commitment</div>
              <div className="subtitle text-secondary">4 hours / day</div>
              <div className="line"></div>
              <div className="description text-secondary">
                Immerse yourself in the professional world during your
                apprenticeship. You’ll learn the ropes from the best and get to
                apply your newly acquired knowledge in the field from day one.{" "}
              </div>
            </div>
          </div>
          <div className="middle-line">GRADUATION</div>
          <div className="card full-time-contract">
            <div className="card-title text-primary">A full-time contract</div>
            <div className="subtitle text-secondary">1 Year / Full-Time</div>
            <div className="line"></div>
            <div className="description text-secondary">
              You’ll be guaranteed a 1 year contract with SCG upon graduation.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
