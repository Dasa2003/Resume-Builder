import React, { useEffect, useState, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import DashboardIcon from '@mui/icons-material/Dashboard';
import axios from 'axios';
import './nav.css';
function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");
  let name = '';

  if (token) {
    const decoded = jwt_decode(token);
    name = decoded.username;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img style={{ width: "40px", padding: "6px" }} /*src= "/download.jpg"*/ alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* mx-auto centers the navbar items */}
            <li className="nav-item mx-3">
              <Link className="nav-link" aria-current="page" to="/homepage"><HomeIcon className="icon-small me-1" /> Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/create"><CreateIcon className="icon-small me-1" /> Create</Link>
            </li>
            <li className="nav-item mx-3">
            <Link className="nav-link d-flex align-items-center" to="/dashboard">
                <DashboardIcon className="icon-small me-1" /> Dashboard
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {token !== null && (
              <>
                <li className="nav-item">
                  <span className="nav-link" style={{ cursor: "default" }}>{`Hi, ${name}`}</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" onClick={logoutUser} style={{ cursor: "pointer", marginRight:"-20px", marginLeft:"40px"}}><LogoutIcon /></a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;














/*import React, { useContext } from 'react'
import jwt_decode from 'jwt-decode'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const{user,logoutUser}=useContext(AuthContext)
  const token=localStorage.getItem("authTokens")
  if(token)
  {
    const decoded=jwt_decode(token)
    var user_id=decoded.user_id
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img style={{width:"40px",padding:"6px"}} src="###" alt=""/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {###{token===null&&
              <>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/register">Register</Link>
              </li> }
              </>###}
              {token!==null&&
             <>
             <li class="nav-item">
               <Link class="nav-link active" aria-current="page" to="/homepage">Home</Link>
             </li>
              <li class="nav-item">
              <Link class="nav-link" to="/create">Create</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}>Logout</a>
              </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar*/