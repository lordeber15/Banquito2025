import {Link} from "react-router"
import aporte from "../assets/aporte.svg"
import report from "../assets/report.svg"
import credito from "../assets/credito.svg"
function Dashboard() {
  return (
    <div className="w-full h-full p-4">
        <div className="text-6xl font-bold flex justify-center p-4 text-cyan-900">
        Banquito 2025
        </div>
        <div className="flex gap-4 justify-center justify-items-center p-4 flex-wrap">
            <Link to={"/aportes"} className="w-max p-12 bg-cyan-700 hover:bg-cyan-600 rounded-md shadow-xl text-7xl flex items-center font-bold text-white gap-4 flex-col"><img src={aporte} className="w-32"/>Aportes</Link>
            <Link to={"/creditos"} className="w-max p-12 bg-cyan-700 hover:bg-cyan-600 rounded-md shadow-xl text-7xl flex items-center font-bold text-white gap-4 flex-col"><img src={credito} className="w-32"/> Creditos</Link>
            <Link to={"/reportes"} className="w-max p-12 bg-cyan-700 hover:bg-cyan-600 rounded-md shadow-xl text-7xl flex items-center font-bold text-white gap-4 flex-col"><img src={report} className="w-32"/> Reportes</Link>
        </div>
    </div>
  )
}

export default Dashboard