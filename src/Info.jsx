import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="cardInfo">
      <img src="./images/Rectangle_90.png" />
      <div className="infoheader">
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <p>laurasmith.website</p>
      </div>
      <div className="buttonsection">
        <button>
          {" "}
          <FaEnvelope /> Email
        </button>

        <button>
          {" "}
          <FaLinkedin /> Linkden
        </button>
      </div>
    </div>
  );
}
