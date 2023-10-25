import React from 'react'
import '../styles/HeaderEsmeralda.css'
import logo from '../logo.png'
import { NavLink, Link, Outlet } from 'react-router-dom'

export const HeaderEsmeralda = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg header-container">
        <div className="container-fluid header-container contenedorLogoNombre">
          {/* Link elements are used for options that do not lead to any route */}
          <Link className="navbar-brand">
            <img src={logo} alt="Logo" width="35" height="auto" title="Esmeralda" className="d-inline-block align-text-top" />
            <Link className="nombreEsmeralda" title="Esmeralda">Esmeralda</Link>
          </Link>
          <div></div>
        </div>
      </nav>

      {/* Here the content of the subpaths is added */}
      <Outlet />
    </>
  )
}
