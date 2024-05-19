import React from 'react'
import CompanyIcon from '../Pictures/favicon.png'
import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={CompanyIcon} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3" />
                        ABC Corporation
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-5">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/dashboard'>Dashboard</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/'>Employee List</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to='/availableemployee'>Available Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/addemployee'>Add Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/departmentinformation'>Department Information</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex'>
                    <Link to="/user"><button className="btn btn-outline-success mx-2" type=""><i className='fa fa-user-circle'></i></button></Link>
                    <form class="d-flex mx-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='searchBoxEmployee'/>     
                        <button class="btn btn-outline-success" type="submit" id='searchEmployee'>Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar