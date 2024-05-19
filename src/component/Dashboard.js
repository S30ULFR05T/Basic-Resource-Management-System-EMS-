import React from 'react'
import TemporaryAPI from '../TemporaryAPI.json'

function Dashboard() {
    const employees = TemporaryAPI.employees;
    return (
        <>
            <div className='m-4 d-flex justify-content-between' style={{}}>
                <div style={{ height: '80vh', width: '40vw', border: '2px solid black' }} className='p-4 pt-0'>
                    <h2 className='text-center my-4' style={{ textDecoration: "underline" }}>Overall View</h2>
                    <div class="card mb-5" style={{ width: "100%" }}>
                        <div class="card-body">
                            <h5 class="card-title">Total No. of Employees</h5>
                            <p class="card-text">This count shows how many employees are currently working and available in this company.</p>
                            <p class="btn btn-primary">{employees.length}</p>
                        </div>
                    </div>

                    <div class="card mb-5" style={{ width: "100%" }}>
                        <div class="card-body">
                            <h5 class="card-title">Number of Available Employs</h5>
                            <p class="card-text">This count shows number of employees who are available to work. Avoids busy employees.</p>
                            <p class="btn btn-primary text-right text-end">{employees.filter(employee => employee.availability === "Available").length}</p>
                        </div>
                    </div>
                </div>
                <div style={{ height: '80vh', width: '40vw', border: '2px solid black', overflow:'auto'}} className=''>
                    <h2 className='text-center my-3' style={{ textDecoration: "underline" }}>Employe's List</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'>S.No</th>
                                <th scope="col" className='text-center'>Name</th>
                                <th scope="col" className='text-center'>Domain Work</th>
                                <th scope="col" className='text-center'>Availablity</th>
                            </tr>
                        </thead>
                        <tbody>
                            { employees.map((employe, index)=>{
                                return <tr> 
                                <th scope="row" className='text-center'>{index+1}</th>
                                <td className='text-center'>{employe.name}</td>
                                <td className='text-center'>{employe.domain}</td>
                                <td className='text-center'>{employe.availability}</td>
                            </tr>  
                        }
                        )
                        }

                            {/* // <tr>
                            //     <th scope="row" className='text-center'>2</th>
                            //     <td className='text-center'>Rohit Kumar</td>
                            //     <td className='text-center'>Frontend Developer</td>
                            //     <td className='text-center'>Available</td>
                            // </tr>
                            // <tr>
                            //     <th scope="row" className='text-center'>3</th>
                            //     <td className='text-center'>Deepak singh</td>
                            //     <td className='text-center'>Testing</td>
                            //     <td className='text-center'>Unavailable</td>
                            // </tr>
                            // <tr>
                            //     <th scope="row" className='text-center'>4</th>
                            //     <td className='text-center'>Saurabh Kumar</td>
                            //     <td className='text-center'>Deployment</td>
                            //     <td className='text-center'>Available</td>
                            // </tr>
                            // <tr>
                            //     <th scope="row" className='text-center'>5</th>
                            //     <td className='text-center'>Suraj Kumar</td>
                            //     <td className='text-center'>Frontend Developer</td>
                            //     <td className='text-center'>Unavailable</td>
                            // </tr>
                            // <tr>
                            //     <th scope="row" className='text-center'>6</th>
                            //     <td className='text-center'>Rohit Kumar</td>
                            //     <td className='text-center'>Testing</td>
                            //     <td className='text-center'>Available</td>
                            // </tr>
                            // <tr>
                            //     <th scope="row" className='text-center'>7</th>
                            //     <td className='text-center'>Suraj Kumar</td>
                            //     <td className='text-center'>Deployment</td>
                            //     <td className='text-center'>Unavailable</td>
                            // </tr>
                            // <tr>
                            //     <th scope="row" className='text-center'>8</th>
                            //     <td className='text-center'>Rohit Kumar</td>
                            //     <td className='text-center'>Backend Developer</td>
                            //     <td className='text-center'>Available</td>
                            // </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Dashboard