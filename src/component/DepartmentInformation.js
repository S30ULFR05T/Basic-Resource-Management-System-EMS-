import React from "react";
import TemporaryAPI from "../TemporaryAPI.json";



const DepartmentInformation = () => {
  const employee = TemporaryAPI.employees;
  return (
    <div className="d-flex justify-content-around my-2">
      <div style={{ width: "24%", height: "90vh", border: "2px solid black" }}>
        <h5 className="text-center my-2">Frontend Development</h5> <br /> <br />
        <ul style={{ listStyle: "none" }}>
          <li>
            Total number of Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {employee.length}
            </a>
          </li>{" "}
          <br />
          <li>
            Available Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter(
                  (employee) => employee.domain === "Frontend Development"
                ).length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Unavailable Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter(
                  (employee) => employee.availability === "Unavailable"
                ).length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Available Vacancies:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              15
              {/* This the value of Available Vacancies can be chagened later. */}
            </a>
          </li>
        </ul>
        <div
          style={{
            border: "2px solid black",
            height: "49vh",
            overflow: "auto",
          }}
          className=" m-3"
        >
            <div>
            {employee.map((employe)=>{
                if (employe.domain==="Frontend Development"){
                    return <ul class="list-group m-2" style={{ border: "2px solid black" }}>
                    <li class="list-group-item"><strong>ID: </strong> {employe.emp_id}</li>
                    <li class="list-group-item"><strong>Name: </strong>{employe.name}</li>
                    <li class="list-group-item"><strong>Email: </strong>{employe.email}</li>
                  </ul>
                }
            })}
          
            
            {/* <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul> */}
          </div>
        </div>
      </div>
      <div style={{ width: "24%", height: "90vh", border: "2px solid black" }}>
        <h5 className="text-center my-2">Backend Development</h5> <br /> <br />
        <ul style={{ listStyle: "none" }}>
          <li>
            Total number of Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {employee.length}
            </a>
          </li>{" "}
          <br />
          <li>
            Available Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter(
                  (employee) => employee.domain === "Backend Development"
                ).length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Unavailable Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter(
                  (employee) => employee.availability === "Unavailable"
                ).length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Available Vacancies:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              15
            </a>
          </li>
        </ul>
        <div
          style={{
            border: "2px solid black",
            height: "49vh",
            overflow: "auto",
          }}
          className=" m-3"
        >
          <div>
            {employee.map((employe)=>{
                if(employe.domain==="Backend Development"){
                    return <ul class="list-group m-2" style={{ border: "2px solid black" }}>
                    <li class="list-group-item"><strong>Name: </strong>{employe.name}</li>
                    <li class="list-group-item"><strong>ID: </strong>{employe.emp_id}</li>
                    <li class="list-group-item"><strong>Email: </strong>{employe.email}</li>
                  </ul>
                }
            })}
            
            {/* <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul> */}
          </div>
        </div>
      </div>
      <div style={{ width: "24%", height: "90vh", border: "2px solid black" }}>
        <h5 className="text-center my-2">Testing</h5> <br /> <br />
        <ul style={{ listStyle: "none" }}>
          <li>
            Total number of Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {employee.length}
            </a>
          </li>{" "}
          <br />
          <li>
            Available Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter((employee) => employee.domain === "Testing")
                  .length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Unavailable Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter(
                  (employee) => employee.availability === "Unavailable"
                ).length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Available Vacancies:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              15
            </a>
          </li>
        </ul>
        <div
          style={{
            border: "2px solid black",
            height: "49vh",
            overflow: "auto",
          }}
          className=" m-3"
        >
            <div>
            {employee.map((employe)=>{
                if(employe.domain==="Testing"){
                    return <ul class="list-group m-2" style={{ border: "2px solid black" }}>
                    <li class="list-group-item"><strong>Name: </strong>{employe.name}</li>
                    <li class="list-group-item"><strong>ID: </strong>{employe.emp_id}</li>
                    <li class="list-group-item"><strong>Email: </strong>{employe.email}</li>
                  </ul>
                }
            }
            )}
          
            {/* <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul> */}
          </div>
        </div>
      </div>
      <div style={{ width: "24%", height: "90vh", border: "2px solid black" }}>
        <h5 className="text-center my-2">Deployment</h5> <br /> <br />
        <ul style={{ listStyle: "none" }}>
          <li>
            Total number of Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {employee.length}
            </a>
          </li>{" "}
          <br />
          <li>
            Available Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter((employee) => employee.domain === "Deployment")
                  .length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Unavailable Employees:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              {
                employee.filter(
                  (employee) => employee.availability === "Unavailable"
                ).length
              }
            </a>
          </li>{" "}
          <br />
          <li>
            Available Vacancies:{" "}
            <a href="#" className="btn btn-primary px-2 py-0">
              15
            </a>
          </li>
        </ul>
        <div
          style={{
            border: "2px solid black",
            height: "49vh",
            overflow: "auto",
          }}
          className=" m-3"
        >
          <div>
            {employee.map((employe)=>{
                if(employe.domain==="Deployment"){
                    return <ul class="list-group m-2" style={{ border: "2px solid black" }}>
                    <li class="list-group-item"><strong>Name: </strong>{employe.name}</li>
                    <li class="list-group-item"><strong>ID: </strong>{employe.emp_id}</li>
                    <li class="list-group-item"><strong>Email: </strong>{employe.email}</li>
                  </ul>
                }
            }
            )
            }
            {/* <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">And a fifth one</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
            </ul>
            <ul class="list-group m-2" style={{ border: "2px solid black" }}>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentInformation;

// my margin y axis
// mx margin x axis
