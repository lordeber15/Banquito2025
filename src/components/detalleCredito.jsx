import { useParams } from "react-router"
function detalleCredito() {
    const {name} = useParams();
  return (
    <div>
        <div>Detalles de Credito</div>
        {name}
    </div>
  )
}

export default detalleCredito