import React from 'react'
import '../styles/Footer.css'
import logoUniversidad from '../assets/logoUniversidad.png'
import logoGAIA from '../assets/logoGAIA.png'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="nameTeam">Integrantes</h3>
              <p style={{ margin: '0' , fontSize: '90%'}}>Valentina Tabares Morales</p>
              <p style={{ margin: '0' , fontSize: '90%' }}>Néstor Darío Duque Méndez</p>
              <p style={{ margin: '0' , fontSize: '90%' }}>Paula Andrea Taborda Montes</p>
              <p style={{ margin: '0' , fontSize: '90%' }}>María José Giraldo Gutiérrez</p>
              <p style={{ margin: '0' , fontSize: '90%' }}>Julián Pachón Castrillón</p>
              <p style={{ margin: '0' , fontSize: '90%' }}>Jose Albeiro Montes Gil</p>
            </div>
            <div className="col-md-4">
              <img className="imagenLogo" src={logoUniversidad} alt="Logo Universidad Nacional de Colombia" title="Logo Universidad Nacional de Colombia" />
            </div>
            <div className="col-md-4">
              <img className="imagenGAIA" src={logoGAIA} alt="Logo grupo de investigación Grupo de Ambientes Inteligentes Adaptativos" title="Logo Universidad Nacional de Colombia" />
            </div>
            <div> <br></br>
              <strong>Proyecto: </strong><p>Construcción de una herramienta tecnológica para detección y atención de estudiantes con dificultades específicas de aprendizaje</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
