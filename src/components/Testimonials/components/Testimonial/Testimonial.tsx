import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="header">
        <div className="user-info">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              alt="User Image"
              width={75}
            />
          </div>
          <div className="info">
            <div className="name">Irene Pereyra</div>
            <div className="job-title">Interaction Design Fellow ‘19</div>
          </div>
          <div className="linkedin">
            <img src="../icons/linkedin.svg" alt="" />
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        <div className="linkedin"></div>
      </div>
      <div className="body">
        This Fellowship was a turning point in my career. I wouldn’t be where I
        am today without the financial support and experienced offered through
        the program.
      </div>
      <div className="footer">Education · B.A. Visual Design</div>
    </div>
  );
}
