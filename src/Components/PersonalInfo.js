import React from "react";

export default function PersonalInfo({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };
  return (
    <div className="container">
      <div className="box underdog-regular">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
            <div id="Name" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="mobNum"
              name="mobNum"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
