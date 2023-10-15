import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../styles/Header.css'
import logo from '../logo.png'
import { NavLink, Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header-container">
      <div className="container-fluid header-container">
        <NavLink className="navbar-brand">
          <img src={logo} alt="Logo" width="30" height="auto" className="d-inline-block align-text-top" />
        </NavLink>
        <Link className="navbar-brand">Esmeralda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page">Inicio</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
