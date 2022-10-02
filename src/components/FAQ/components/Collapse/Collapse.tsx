import React, { useState } from "react";
import "./Collapse.css";
import { Collapse as ReactCollapse } from "react-collapse";
import { ICollapse } from "./interfaces";

export default function Collapse({ title, type, content }: ICollapse) {
  const [isOpened, setIsOpened] = useState(false);
  const [activateAnimation, setActivateAnimation] = useState(false);

  const handleButtonState = () => {
    setIsOpened(!isOpened);

    setTimeout(() => {
      !isOpened ? setActivateAnimation(true) : setActivateAnimation(false);
    }, 500);
  };
  return (
    <>
      <div className="collapsible">
        <div className="type">{type}</div>
        <div className="other">
          <div className="header">
            <div className="title">{title}</div>
            <div className="button">
              <button
                className={[
                  "button-micro",
                  isOpened ? "active" : "inactive",
                ].join(" ")}
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
              {content?.map((answer, i) => (
                <p key={i}>{answer.data}</p>
              ))}
            </div>
          </ReactCollapse>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
