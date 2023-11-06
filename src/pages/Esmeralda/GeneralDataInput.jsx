import { useState } from "react";
import '../../styles/GeneralDataInput.css';


export const GeneralDataInput = ({ saveData }) => {

  const [userName, setUserName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()

    // Age is calculated
    let currentDate = new Date();
    let birthDate = new Date(dateOfBirth);
    let userAge = currentDate.getFullYear() - birthDate.getFullYear()
    let monthDifference = currentDate.getMonth() - birthDate.getMonth()

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
      userAge -= 1
    }

    saveData(userName, userAge)
  }

  return (
    <form onSubmit={onSubmit} className="mt-5">
      <div className="card container w-75">
        <div className="card-header text-center">
          <h3>Datos Generales</h3>
        </div>

        <div className="card-body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Fecha de nacimiento</span>
            </div>
            <input
              type="date"
              className="form-control"
              placeholder="Ingresa tu edad"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
        </div>

        <div className="card-footer text-center">
          <button
            className='btn btn-success'
            disabled={userName === "" || dateOfBirth === "" || dateOfBirth <= 0 || dateOfBirth > 20}
          >
            Iniciar Prueba
          </button>
        </div>
      </div>
    </form>
  )
}
