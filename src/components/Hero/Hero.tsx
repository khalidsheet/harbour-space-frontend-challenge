import React, { useEffect } from "react";
import { useGlobalState } from "../../state/global-state";
import "./Hero.css";

export default function Hero() {
  const response = useGlobalState((state) => state.response);

  return (
    <div className="hero">
      <div className="introduction">
        <div className="section-title">
          <div className="main-title">
            <img
              className="img-circle"
              src="../icons/interaction-desgin-circle.png"
              alt=""
            />
            <h3>{response?.scholarship?.name}</h3>
          </div>
          <div className="application-status mobile">
            <div className="powered-by">
              <img
                className="zeptolab-logo"
                src="../icons/elephant.png"
                alt="Powered By Zeptolab"
              />
              <div className="zeptolab-title">
                <span className="by">Powered by:</span>
                <span className="value">
                  {response?.scholarship?.company.name}
                </span>
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
                  <div className="card-value">
                    {response?.scholarship?.location.name}
                  </div>
                </div>
                <div className="card-info start-date">
                  <div className="card-title">Start Date</div>
                  <div className="card-value">
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "medium",
                    }).format(
                      Date.parse(
                        response?.scholarship?.scholarship_start_date || "0"
                      )
                    )}
                  </div>
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
                  <div className="card-value">
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "medium",
                    }).format(
                      Date.parse(
                        response?.scholarship?.application_end_date || "0"
                      )
                    )}
                  </div>
                </div>
                <div className="mesh-background">
                  <img src="../icons/mesh.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="subtitle">
            A fully funded work-study program to launch your tech career
          </div>
          <div className="content">
            {response?.scholarship.description.map((paragraph) => {
              return <p>{paragraph.data}</p>;
            })}
            {/* <p className="mobile-only">
              Scholarship candidates will receive full financial support to
              complete their Masters program at Harbour.Space while gaining
              invaluable work experience through an internship with SCG, a
              leading company in the industry.
            </p> */}
          </div>
          <div className="position">
            <b>Position</b>: {response?.scholarship.position}
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
            <span className="value">{response?.scholarship.company.name}</span>
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
              <div className="card-value">
                {response?.scholarship.location.name}
              </div>
            </div>
            <div className="card-info start-date">
              <div className="card-title">Start Date</div>
              <div className="card-value">
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                }).format(
                  Date.parse(
                    response?.scholarship?.scholarship_start_date || "00"
                  )
                )}
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className=" duration">
              <div className="card-title">Duration</div>
              <div className="card-value">
                {response?.scholarship?.duration} Year <div> Full-Time</div>
              </div>
            </div>
            <div className="card-info end-date">
              <div className="card-title">End Date</div>
              <div className="card-value">
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                }).format(
                  Date.parse(
                    response?.scholarship?.application_end_date || "00"
                  )
                )}
              </div>
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
