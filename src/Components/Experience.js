import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience({ popText, data, setData }) {
  const [pop, setPop] = useState(false);
  const nav = useNavigate();
  const [experiences, setExperiences] = useState([
    { Firm: "", Role: "", "start-year": "", "end-year": "" },
  ]);

  const yes = () => {
    setData((prevData) => ({
      ...prevData,
      experience: {
        type: "Fresher",
      },
    }));
    nav("/education");
  };

  const no = () => {
    setPop(true);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index][name] = value;
    setExperiences(updatedExperiences);
  };

  const submit = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      experience: {
        type: "Experienced",
        details: experiences,
      },
    }));
    console.log(experiences);
    nav("/education");
  };

  const addMore = (e) => {
    e.preventDefault();
    setExperiences((prev) => [
      ...prev,
      { Firm: "", Role: "", "start-year": "", "end-year": "" },
    ]);
  };

  return (
    <div className="popup-container underdog-regular">
      {pop === false ? (
        <div className="popup">
          <h2>{popText}</h2>
          <button className="btn btn-dark mx-2 my-2" onClick={yes}>
            Yes
          </button>
          <button className="btn btn-dark mx-2 my-2" onClick={no}>
            No
          </button>
        </div>
      ) : (
        <div className="container">
          <div className="box">
            <div className="playfair-display-font">
              <h1>Enter Experience Details</h1>
            </div>
            <form onSubmit={submit}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="mb-4 border-bottom pb-3">
                  <div className="mb-3">
                    <label className="form-label">Firm Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Firm"
                      value={exp.Firm}
                      onChange={(e) => handleChange(e, idx)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Job Role</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Role"
                      value={exp.Role}
                      onChange={(e) => handleChange(e, idx)}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <label className="form-label mx-2">From</label>
                    <input
                      type="number"
                      name="start-year"
                      min="1990"
                      max="2027"
                      className="form-control mx-2"
                      value={exp["start-year"]}
                      onChange={(e) => handleChange(e, idx)}
                    />
                    <label className="form-label mx-2">to</label>
                    <input
                      type="number"
                      name="end-year"
                      min="1990"
                      max="2027"
                      className="form-control mx-2"
                      value={exp["end-year"]}
                      onChange={(e) => handleChange(e, idx)}
                    />
                  </div>
                </div>
              ))}

              <button type="submit" className="btn btn-light my-3 mx-2">
                Submit
              </button>
              <button className="btn btn-light my-3 mx-2" onClick={addMore}>
                Add More
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
