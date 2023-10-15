import { NavLink } from 'react-router-dom'
import '../../styles/HomeEsmeralda.css'

export const HomeEsmeralda = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly options">
        <NavLink to="fonologica">
          <button className="btn btn-success">Dislexia Fonológica</button>
        </NavLink>
        <NavLink to="superficial">
          <button className="btn btn-success">Dislexia Superficial</button>
        </NavLink>
      </div>
    </>
  )
}
