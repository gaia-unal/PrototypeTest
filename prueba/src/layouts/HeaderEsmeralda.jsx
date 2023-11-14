import React from 'react'
import '../styles/HeaderEsmeralda.css'
import logo from '../logo.png'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { Footer } from './Footer';

export const HeaderEsmeralda = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg header-container">
        <div className="container-fluid header-container contenedorLogoNombre">
          {/* Link elements are used for options that do not lead to any route */}
          <Link to="https://gaia.manizales.unal.edu.co/PiedrasPreciosasPrototipo/esmeralda/inicio" className="navbar-brand">
            <img style={{ display: 'inline' }} src={logo} alt="Logo" width="35" height="auto" title="Esmeralda" className="d-inline-block align-text-center" />
            <p style={{ display: 'inline' }} className="nombreEsmeralda" title="Esmeralda">Esmeralda</p>
          </Link>
          <div></div>
        </div>
      </nav>

      {/* Here the content of the subpaths is added */}
      <Outlet />

      <Footer />
    </>
  )
}
