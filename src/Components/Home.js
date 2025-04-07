import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <div className="popup-container underdog-regular">
        <div className="popup">
          <h1 className="playfair-display-font">{props.title}</h1>
          <hr />
          <div>{props.desc}</div>
          <Link to="/personalInfo">
            <button type="button" className="btn btn-dark" >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
