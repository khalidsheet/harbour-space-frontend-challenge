import React, { useState } from "react";
import "./Collapse.css";
import { Collapse as ReactCollapse } from "react-collapse";
import { ICollapse } from "./interfaces";

export default function Collapse({ title }: ICollapse) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="collapsible">
      <div className="header">
        <div className="type">Program Condisions</div>
        <div className="title">{title}</div>
        <div className="button">
          <button
            className="button-micro"
            onClick={() => setIsOpened(!isOpened)}
          >
            +
          </button>
        </div>
      </div>
      <ReactCollapse isOpened={isOpened}>
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
