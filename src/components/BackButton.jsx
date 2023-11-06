import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  let navigate = useNavigate();

  return (
    <div className='container d-flex flex-row-reverse mt-2'>
      <button className="btn btn-success" onClick={() => navigate(-1)}>Atrás</button>
    </div>
  )
}
