import { useParams } from "react-router"
function DetalleCredito() {
    const {name} = useParams();
  return (
    <div>
        <div className="font-bold text-5xl bg-slate-700 text-white flex justify-center p-4">Detalles de Credito</div>
        <div className="flex flex-row justify-evenly p-4">
          <div>
        <div>Nombre:</div>
        <input type="text" value={name} className="rounded-md border-2 p-1 border-gray-300"/>
          </div>
          <div>
        <div>Interes Acumulado:</div>
        <input type="number" className="rounded-md border-gray-300 border-2 p-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
          </div>
          <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="flex justify-center items-center border-2 bg-slate-600 hover:bg-slate-700 p-3 rounded-2xl text-white font-bold shadow-md cursor-pointer">Nuevo Credito</button>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">

              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
        </dialog>
        
    </div>
  )
}

export default DetalleCredito