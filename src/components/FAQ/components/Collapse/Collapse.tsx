import React, { useState } from "react";
import "./Collapse.css";
import { Collapse as ReactCollapse } from "react-collapse";
import { ICollapse } from "./interfaces";

export default function Collapse({ title }: ICollapse) {
  const [isOpened, setIsOpened] = useState(false);
  const [activateAnimation, setActivateAnimation] = useState(false);

  const handleButtonState = () => {
    setIsOpened(!isOpened);

    setTimeout(() => {
      !isOpened ? setActivateAnimation(true) : setActivateAnimation(false);
    }, 500);
  };
  return (
    <div className="collapsible">
      <div className="header">
        <div className="type">Program Condisions</div>
        <div className="title">{title}</div>
        <div className="button">
          <button
            className={["button-micro", isOpened ? "active" : "inactive"].join(
              " "
            )}
            onClick={handleButtonState}
          >
            {activateAnimation ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#dadada"
              >
                <path
                  fill="#dadada"
                  d="M6 13a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H6Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#6a6a6a "
              >
                <g data-name="Layer 2">
                  <g data-name="plus">
                    <rect
                      width="24"
                      height="24"
                      opacity="0"
                      transform="rotate(180 12 12)"
                    />
                    <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" />
                  </g>
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
      <ReactCollapse isOpened={activateAnimation}>
        <div className="content">
          <p>
            The majority of our students receive numerous job offers at the end
            of the second academic year of their Bachelor's programme and at the
            end of the first academic year of their Master's programme. The best
            applicants receive an offer from our industrial partners at the
            beginning of their programmes.
          </p>
          <p>
            Harbour.Space is highly recognized among innovative employers and is
            strategic partner of B.Grimm multi- industry corporation with 140
            years of history in Thailand. Together we insure students get the
            best knowledge about the current job market opportunities.
          </p>
          <p>
            We offer our students paid internships options during studies
            jointly with our industrial partners.
          </p>{" "}
          <p>
            Employers that hired graduates of Harbour.Space in the past include
            Google, IBM, Accenture, Typeform, Frog, and other tech centric
            companies. Our industry specific employability report could be
            provided to you separately during the admission process.
          </p>
        </div>
      </ReactCollapse>
      <div className="line"></div>
    </div>
  );
}
