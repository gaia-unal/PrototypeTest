import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import logo from '../logo.png'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg header-container">
            <div class="container-fluid header-container">
                <a class="navbar-brand" href="../index.js">
                    <img src={logo} alt="Logo" width="30" height="auto" class="d-inline-block align-text-top" />
                </a>
                <a class="navbar-brand" href="../index.js">Esmeralda</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../index.js">Inicio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
