import React from "react";
import CompanyIcon from "../Pictures/favicon.png";



const Home = () => {
  return (
      <div className="d-flex justify-content-center align-items-center gap-4" style={{height:'87vh'}}>
        <div>
          <img src={CompanyIcon} className="" />
        </div>
        <div>
          <h3>Welcome to</h3>
          <h1>ABC Corporation</h1>
        </div>
      </div>
  );
};

export default Home;
