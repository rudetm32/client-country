import { Link } from "react-router-dom";

import style from "./NavBar.module.css";


export default function NavBar() {
  return (
    <div className={style.conteiner}>
      <ul className={style.lista}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/formulario">Crear</Link></li>
        <li><Link to="/search">🔎</Link></li>
      </ul>
    </div>
  )
}
