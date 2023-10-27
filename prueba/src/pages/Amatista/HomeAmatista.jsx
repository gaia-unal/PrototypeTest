import { NavLink } from "react-router-dom"
import { Footer } from "../../layouts/Footer"
import amatista from '../../assets/3.png'
import construccion from '../../assets/PaginaConstruccion.png'

export const HomeAmatista = () => {
  return (
    <>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <div className='container d-flex flex-row-reverse mt-2'>
          <button className='btn btn-success' title="Regresa al inicio">Volver al inicio</button>
        </div>
      </NavLink>

      <div className='container w-75 container-module-description'>
        <img src={amatista} alt="Logo de Amatista" className='img-logo' />
        <h4 className='text-center'>Apoyo al docente a realizar una identificación temprana de la Disgrafía en el aula de clase</h4>
      </div>

      <div className="text-center">
        <img src={construccion} alt="Página en construcción" />
        <h1 style={{ color: 'blue' }}>SITIO WEB EN CONSTRUCCIÓN</h1>
      </div>

      <Footer />
    </>
  )
}
