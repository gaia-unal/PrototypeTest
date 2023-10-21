import { NavLink } from "react-router-dom"
import '../../styles/DetectionTestsList.css'

export const DetectionTestsList = ({ tests }) => {
  return (
    <>
      <div className="container mt-3 w-75">
        <h3 className="text-center mb-5">Pruebas de Detección</h3>

        <div className="test-list">
          {tests.map(item => {
            return (
              <>
                <div className="d-flex align-items-center">
                  <NavLink to={item.route}>
                    <img className="item-img" src={item.image} />
                  </NavLink>
                </div>
                <div>
                  <h5>{item.title}</h5>
                  <p>
                    {item.description}
                  </p>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
