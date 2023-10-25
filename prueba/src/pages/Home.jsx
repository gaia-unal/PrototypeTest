import { Link, NavLink } from 'react-router-dom'
import '../styles/Home.css'
import logoPrincipal from '../assets/logo-app.png'
import diamante from '../assets/1.png'
import esmeralda from '../assets/2.png'
import amatista from '../assets/3.png'

export const Home = () => {
  return (
    <>

      <nav className="navbar" style={{ padding: '10px', height: '90px' }}>
        <div className="container-fluid">
          <a className="navbar-brand texto" href="#">
            <img
              src={logoPrincipal}
              alt="Logo"
              style={{ width: '15%', marginRight: '5%' }}
              className="d-inline-block align-text-top"
            />
            Piedras preciosas
          </a>
        </div>
      </nav>



      <div className="d-flex justify-content-evenly content">
        {/* <img className="logo" src={logoPrincipal} alt="Logo de la aplicación" />
        <h1 className='text-start app-name'>Piedras preciosas</h1> */}

      </div>

      <h2 className='text-center title'>Módulos</h2>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            {/* Discalculia */}
            <Link to={'https://gaia.manizales.unal.edu.co/diamante/'}>
              <img className='module-img' src={diamante} style={{ width: '45%'}} alt="Imagen de un diamante" title="Herramienta Diamante" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* Dislexia */}
            <NavLink to="/esmeralda/inicio">
              <img className='module-img' src={esmeralda} style={{ width: '45%'}} alt="Imagen de una esmeralda" title="Herramienta Esmeralda" />
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* Disgrafía */}
            <Link>
              <img className='module-img' src={amatista} style={{ width: '45%'}} alt="Imagen de una amatista" title="Herramienta Amatista" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
