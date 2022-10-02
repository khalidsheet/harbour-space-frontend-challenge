import React from "react";
import { useGlobalState } from "../../state/global-state";
import "./About.css";

export default function About() {
  const response = useGlobalState((state) => state.response);

  return (
    <div className="about">
      <div className="about-content">
        <div className="image-overview">
          <img className="student-image" src="../icons/student.png" alt="" />
        </div>
        <div className="about-content-text">
          <div className="content-title">About the apprenticeship</div>
          <div className="content-body">
            {response?.scholarship.about.map((paragraph) => {
              return <p style={{ marginTop: 0 }}>{paragraph.data}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card scholarship-value">
          <div className="card-title text-primary">Scholarship value</div>
          <div className="card-fee text-secondary">
            &euro;
            {new Intl.NumberFormat("en").format(
              response?.scholarship.total_value || 0
            )}
          </div>
          <div className="middle-line"></div>
          <div className="additional-info">
            <div className=" left-section">
              <div className="card-info tuition-covered">
                <div className="card-title">Tuition covered</div>
                <div className="card-value text-secondary">
                  &euro;
                  {new Intl.NumberFormat("en").format(
                    response?.scholarship.tuition || 0
                  )}
                </div>
              </div>
              <div className="card-info remaining">
                <div className="card-title">Remaining</div>
                <div className="card-value text-secondary">
                  &euro;
                  {new Intl.NumberFormat("en").format(
                    response?.scholarship.remaining || 0
                  )}
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className=" duration">
                <div className="card-title">Living stipend</div>
                <div className="card-value text-secondary">
                  &euro;
                  {new Intl.NumberFormat("en").format(
                    response?.scholarship.stipend_per_year || 0
                  )}{" "}
                  (&euro;
                  {new Intl.NumberFormat("en").format(
                    response?.scholarship.stipend_per_month || 0
                  )}
                  /month)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="others">
          <div className="commitment-group">
            <div className="card study-commitment">
              <div className="card-title text-primary">Study commitment</div>
              <div className="subtitle text-secondary">
                {response?.scholarship.study_commitment} hours / day
              </div>
              <div className="line"></div>
              <div className="description text-secondary">
                {response?.scholarship.study_commitment_text}
              </div>
            </div>
            <div className="card work-commitment">
              <div className="card-title text-primary">Work commitment</div>
              <div className="subtitle text-secondary">
                {response?.scholarship.internship_commitment} hours / day
              </div>
              <div className="line"></div>
              <div className="description text-secondary">
                {response?.scholarship.internship_commitment_text}{" "}
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
