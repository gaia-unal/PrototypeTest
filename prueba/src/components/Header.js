import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import logo from '../logo.png'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg header-container">
            <div className="container-fluid header-container">
                <a className="navbar-brand" href="../index.js">
                    <img src={logo} alt="Logo" width="30" height="auto" className="d-inline-block align-text-top" />
                </a>
                <a className="navbar-brand" href="../index.js">Esmeralda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="../index.js">Inicio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
