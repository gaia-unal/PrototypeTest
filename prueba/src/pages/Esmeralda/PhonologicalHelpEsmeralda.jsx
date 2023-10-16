import { NavLink } from "react-router-dom"

export const PhonologicalHelpEsmeralda = () => {
  return (
    <div className="container">
      <h1 className="text-center">Pruebas Disponibles</h1>
      <hr />
      <ul className="list-group">
        <NavLink to="test1">
          <li className="list-group-item">Prueba 1</li>
        </NavLink>
      </ul>
    </div>
  )
}
