import { useParams, Link } from "react-router";
import TablaCreditos from "../components/tablacreditos";
import back from "../assets/back.svg";
import home from "../assets/home.svg";

function DetalleCredito() {
  const { name } = useParams();
  return (
    <div>
      <div className="font-bold text-5xl bg-slate-700 text-white p-4 flex justify-around items-center">
        <Link to="/creditos">
          <img src={back} className="w-8 flex justify-center items-center" />
        </Link>
        Detalles de Credito
        <Link to="/">
          <img src={home} className="w-8 flex justify-center items-center" />
        </Link>
      </div>
      <div className="flex flex-row justify-evenly items-center content-center p-4">
        <div>
          <div>Nombre:</div>
          <input
            type="text"
            value={name}
            className="rounded-md border-2 p-2 border-gray-300"
          />
        </div>
        <div>
          <div>Interes Acumulado:</div>
          <input
            type="number"
            className="rounded-md border-gray-300 border-2 p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <button className=" text-white bg-slate-600 cursor-pointer p-4 font-bold rounded-lg text-md">
          Nuevo Credito
        </button>
      </div>
      <TablaCreditos credito="1" />
      <TablaCreditos credito="2" />
      <TablaCreditos credito="3" />
    </div>
  );
}

export default DetalleCredito;
