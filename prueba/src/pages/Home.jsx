import { Link, NavLink } from 'react-router-dom'
import '../styles/Home.css'

export const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly content">
        <img className="logo" src="https://placekitten.com/g/200/200" alt="Logo de la aplicación" />
        <h1 className='text-start app-name'>Nombre de la herramienta</h1>
      </div>

      <h2 className='text-center title'>Módulos</h2>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            {/* Discalculia */}
            <Link>
              <img className='module-img' src="https://placekitten.com/g/300/90" alt="" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* Dislexia */}
            <NavLink to="/esmeralda/inicio">
              <img className='module-img' src="https://placekitten.com/g/300/90" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* Disgrafía */}
            <Link>
              <img className='module-img' src="https://placekitten.com/g/300/90" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
