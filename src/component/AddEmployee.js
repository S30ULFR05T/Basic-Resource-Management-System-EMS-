import React, { useState } from "react";

const AddEmployee = () => {
  const [selectedOption, setSelectedOption] = useState("Not Selected");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="container my-5 ">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            minLength={3}
            placeholder="Name"
            required
          />
          <div id="nameHelp" className="form-text">
            This field is mandotary and minimum length is 3.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email ID(gmail.com, outlook.com, yahoo.com, naver.com, microsoft.com)"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone No.*
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            aria-describedby="phoneHelp"
            placeholder="Phone Number"
            maxLength={10}
            required
          />
          <div id="phoneHelp" className="form-text">
            We'll never share your Phone No. with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="domain" className="form-label">
            Choose Your Domain:
          </label>{" "}
          <br />
          <div className="d-flex gap-3">
            <div>
              <input
                type="radio"
                id="front"
                value="Frontend Development"
                onChange={handleOptionChange}
                className={`btn-check`}
                autoComplete="off"
                name="domain"
                checked={selectedOption === "Frontend Development"}
              />
              <label
                htmlFor="front"
                className={`btn py-1 ${
                  selectedOption === "Frontend Development"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                Frontend Development
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="backend"
                name="domain"
                value="Backend Development"
                checked={selectedOption === "Backend Development"}
                onChange={handleOptionChange}
                className="btn-check"
                autoComplete="off"
              />
              <label
                htmlFor="backend"
                className={`btn py-1 ${
                  selectedOption === "Backend Development"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                Backend Development
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="testing"
                name="domain"
                value="Testing"
                checked={selectedOption === "Testing"}
                onChange={handleOptionChange}
                className="btn-check"
                autoComplete="off"
              />
              <label
                htmlFor="testing"
                className={`btn py-1 ${
                  selectedOption === "Testing"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                Testing
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="deployment"
                name="domain"
                value="Deployment"
                checked={selectedOption === "Deployment"}
                onChange={handleOptionChange}
                className="btn-check"
                autoComplete="off"
              />
              <label
                htmlFor="deployment"
                className={`btn py-1 ${
                  selectedOption === "Deployment"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                Deployment
              </label>
            </div>
          </div>
          <p className="my-2">
            Selected Domain:{" "}
            <span className="text-success">{selectedOption}</span>
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Availablity
          </label>
          <br />
          <select name="State" id="status" className="w-100 p-2 rounded">
            <option value="Delhi" selected>
              Available
            </option>
            <option value="Punjab">Not Available</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" disabled>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;