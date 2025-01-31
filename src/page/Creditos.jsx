import Card from "../components/cart";
import { Link } from "react-router";
import back from "../assets/back.svg";
import home from "../assets/home.svg";

function Creditos() {
  return (
    <div>
      <div className="flex justify-around bg-slate-700 content-center items-center">
        <Link to="/">
          <img src={back} className="w-8 flex justify-center items-center" />
        </Link>
        <div className=" text-5xl font-bold text-white p-4">Credito</div>
        <Link to="/">
          <img src={home} className="w-8 flex justify-center items-center" />
        </Link>
      </div>
      <div className="gap-4 flex flex-wrap justify-center items-center p-6">
        <Card nombre="Katherine"></Card>
        <Card nombre="Flor"></Card>
        <Card nombre="Kelita"></Card>
        <Card nombre="Regina"></Card>
        <Card nombre="karina"></Card>
        <Card nombre="Erita"></Card>
        <Card nombre="Erick"></Card>
        <Card nombre="Elvita"></Card>
        <Card nombre="Eber"></Card>
      </div>
    </div>
  );
}

export default Creditos;
