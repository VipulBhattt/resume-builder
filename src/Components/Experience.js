import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience({ popText, data, setData }) {
  const [fre, setFre] = useState("");
  const [pop, setPop] = useState(false);
  const nav=useNavigate();
  const yes = () => {
    setFre("fresher");
    setData((prevData) => ({
      ...prevData,
      experience: {
        type: "Fresher",
      },
    }));
    nav("/education");
  };
  const no = () => {
    setFre("experienced");
  };
  return (
    <div>
      <div className="popup-container underdog-regular">
        <div className="popup">
          <h2>{popText}</h2>
          <button
            type="button"
            className="btn btn-dark mx-2 my-2"
            onClick={yes}
          >
            Yes
          </button>
          <button type="button" className="btn btn-dark mx-2 my-2" onClick={no}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
