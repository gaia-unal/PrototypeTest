import React from 'react'
import '../styles/HeaderEsmeralda.css'
import logo from '../logo.png'
import { NavLink, Link, Outlet } from 'react-router-dom'

export const HeaderEsmeralda = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg header-container">
        <div className="container-fluid header-container">
          {/* Link elements are used for options that do not lead to any route */}
          <Link className="navbar-brand">
            <img src={logo} alt="Logo" width="30" height="auto" className="d-inline-block align-text-top" />
          </Link>
          <Link className="navbar-brand">Esmeralda</Link>
          <div></div>
        </div>
      </nav>

      {/* Here the content of the subpaths is added */}
      <Outlet />
    </>
  )
}
