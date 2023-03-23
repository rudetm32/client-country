import { useHistory } from "react-router-dom"

import Btn from "./Btn"

import style from "./Landing.module.css"

export default function Landing() {
  
  const history = useHistory();
  const handleNav = () =>{
    history.push("/home")
  }
  
  return (
    <>
    <div className={style.conteiner}>
      <div className={style.btn}>
      <Btn  nombre ={"Bienvenido Click para ingresar"} props={handleNav}/>  
      </div>
    </div>
    </>
  )
}
