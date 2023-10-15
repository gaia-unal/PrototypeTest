import { NavLink } from "react-router-dom"

export const DyslexiaSuperficialHome = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly options">
        <NavLink to="deteccion">
          <button className="btn btn-primary">Detección</button>
        </NavLink>
        <NavLink to="apoyo">
          <button className="btn btn-primary">Atención</button>
        </NavLink>
      </div>
    </>
  )
}
