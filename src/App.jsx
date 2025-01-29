import './App.css'
import {Routes, Route } from "react-router";
import Aportes from "../src/page/Aportes"
import Creditos from "../src/page/Creditos"
import Dashboard from './page/Dashboard';
import Reportes from './page/reportes';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/aportes" element={<Aportes/>} />
      <Route path="/creditos" element={<Creditos/>} />
      <Route path="/reportes" element={<Reportes/>} />
    </Routes>
    </>
  )
}

export default App
