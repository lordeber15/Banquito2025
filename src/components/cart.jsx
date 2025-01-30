import {Link} from "react-router"

function Cart(props) {
  return (
    <Link to={"/creditos/"+props.nombre}>
      <div className="rounded-md border-2 hover:bg-slate-600 bg-slate-700 border-slate-700 w-64 flex justify-center text-3xl p-12 font-bold text-white shadow-lg shadow-slate-700/50">{props.nombre}</div>
    </Link>
  )
}

export default Cart
