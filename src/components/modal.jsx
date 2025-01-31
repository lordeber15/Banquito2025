function modal(props) {
  return (
    <div>
      <dialog
        id={props.id}
        className="modal flex justify-center items-center content-center p-6 rounded-lg"
      >
        <div className="modal-box">
          <div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg flex justify-center border-b-2 p-2">
              Detalles de Credito
            </h3>
          </div>
          <div className="p-2 flex flex-col">
            <label className="p-1">Monto</label>
            <input
              type="number"
              className="p-2 border-2 border-slate-400 rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label className="p-1">Meses</label>
            <input
              type="number"
              max={12}
              className="p-2 border-2 border-slate-400 rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label className="p-1">Interes</label>
            <input
              type="number"
              max={10}
              className=" p-2 border-2 border-slate-400 rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label className="p-1">Fecha</label>
            <input
              type="date"
              className=" p-2 border-2 border-slate-400 rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default modal;
