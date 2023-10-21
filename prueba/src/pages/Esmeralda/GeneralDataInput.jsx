import { useState } from "react"
import '../../styles/GeneralDataInput.css'

export const GeneralDataInput = ({ saveData }) => {

  const [userName, setUserName] = useState("")
  const [userAge, setUserAge] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()

    saveData(userName, userAge)
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 container w-75">
      <div className="card">
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
              <span className="input-group-text" id="inputGroup-sizing-default">Edad</span>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa tu edad"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </div>
        </div>

        <div className="card-footer text-center">
          <button
            className='btn btn-success'
            disabled={userName === "" || userAge === "" || userAge <= 0 || userAge > 20}
          >
            Iniciar Prueba
          </button>
        </div>
      </div>
    </form>
  )
}
