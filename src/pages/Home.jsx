import { Link, NavLink } from 'react-router-dom'
import '../styles/Home.css'
import logoPrincipal from '../assets/logo-app.png'
import diamante from '../assets/1.png'
import esmeralda from '../assets/2.png'
import amatista from '../assets/3.png'
import { Footer } from '../layouts/Footer';
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.js'
import { useEffect } from 'react'

export const Home = () => {

  useEffect(() => {
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))
  })

  return (
    <>
      <nav className="navbar" style={{ padding: '10px', height: '90px' }}>
        <div className="container-fluid">
          <Link style={{ textDecoration: 'none' }}>
            <div className="navbar-brand texto">
              <img
                src={logoPrincipal}
                alt="Logo"
                style={{ width: '15%', marginRight: '5%' }}
                className="d-inline-block align-text-top"
              />
              Piedras preciosas
            </div>
          </Link>
        </div>
      </nav>

      <div className='container w-75 app-description'>
        <h4 className='description'>
          Piedras Preciosas es un aplicativo que contiene pruebas de detección temprana y recursos de atención para estudiantes con dificultades específicas de aprendizaje como discalculia, dislexia y disgrafía. Contamos con Diamante para discalculia 💙, con Esmeralda para Dislexia 💚 y con Amatista para Disgrafía 💜 ¡Descubre con nosotros un mundo de posibilidades con la tecnología!
        </h4>
      </div>

      <div className="d-flex justify-content-evenly content">
        {/* <img className="logo" src={logoPrincipal} alt="Logo de la aplicación" />
        <h1 className='text-start app-name'>Piedras preciosas</h1> */}

      </div>

      <h1 className='text-center title'><span className='bordered-text' title='Aquí encontrarás los módulos con los que contamos'>Módulos:</span></h1>


      <div className="container w-50 d-flex module-container">
        <div className='p-2 flex-grow-1'>
          {/* Discalculia */}
          <NavLink to={'https://gaia.manizales.unal.edu.co/diamante/'}>
            <img className='module-img' src={diamante} alt="Imagen de un diamante" title="Herramienta Diamante" />
          </NavLink>
        </div>
        <div className='p-2'>
          <button
            data-bs-trigger="hover focus"
            className='btn'
            data-bs-toggle="popover"
            data-bs-content="Entorno informático educativo que permite realizar una detección temprana de la discalculia (dificultad de aprendizaje en las matemáticas) para estudiantes de grados primero, segundo y tercero de básica primaria">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="container w-50 d-flex module-container">
        <div className='p-2 flex-grow-1'>
          {/* Dislexia */}
          <NavLink to="/esmeralda/inicio">
            <img className='module-img' src={esmeralda} alt="Imagen de una esmeralda" title="Herramienta Esmeralda" />
          </NavLink>
        </div>
        <div className='p-2'>
          <button
            data-bs-trigger="hover focus"
            className='btn'
            data-bs-toggle="popover"
            data-bs-content="Entorno informático educativo para estudiantes de grado primero de básica primaria, enfocado en realizar una detección temprana de dislexia fonológica y dislexia superficial o visual; además, cuenta con recursos de atención para fortalecer las competencias de esta dificultad específica de aprendizaje en la lectura">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="container w-50 d-flex module-container">
        <div className='p-2 flex-grow-1'>
          {/* Disgrafía */}
          <NavLink to='/amatista'>
            <img className='module-img' src={amatista} alt="Imagen de una amatista" title="Herramienta Amatista" />
          </NavLink>
        </div>
        <div className='p-2'>
          <button
            data-bs-trigger="hover focus"
            className='btn'
            data-bs-toggle="popover"
            data-bs-content="Entorno informático educativo para estudiantes de grado primero de básica primaria, enfocado en la disgrafía lingüística, para realizar una detección temprana de disgrafía fonológica y disgrafía superficial, que además cuenta con recursos de atención para fortalecer las competencias asociadas a esta dificultad específica de aprendizaje en la escritura">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
