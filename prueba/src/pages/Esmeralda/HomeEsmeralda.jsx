import { NavLink } from 'react-router-dom'
import '../../styles/HomeEsmeralda.css'

export const HomeEsmeralda = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <div className='card'>
              <NavLink to="fonologica">
                <img src='https://placekitten.com/600/600' className='card-img-top' alt='Imagen de Dislexia Fonológica' />
              </NavLink>
              <div className='card-body'>
                <p className='card-text text-center'>AQUÍ VA LA DESCRIPCIÓN DE DISLEXIA FONOLÓGICA</p>
              </div>
            </div>
          </div>
          <div className='col d-flex justify-content-center'>
            <div className='card'>
              <NavLink to="superficial">
                <img src='https://placekitten.com/700/700' className='card-img-top' alt='Imagen de Dislexia Superficial' />
              </NavLink>
              <div className='card-body'>
                <p className='card-text text-center'>AQUÍ VA LA DESCRIPCIÓN DE DISLEXIA SUPERFICIAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
