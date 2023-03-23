import { useState} from "react";
import { useDispatch, useSelector} from "react-redux"
import { searchName } from "../redux/actions";

import Btn from "./Btn";
import Card from "./Card";
import style from "./SearchBar.module.css"
        
export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const find = useSelector(state=>state.findOne)
  
  const handleChange = (event) => {
    setSearch(event.target.value)  
  };

  function handleClick(e) {
    e.preventDefault(e);
    dispatch(searchName(search));
     };

  function reset(){
    setSearch("") 
  }
  
  return (
  <>
  <div className={style.conteiner}>
    <form className={style.box}  onChange={handleChange}>
      <div className={style.conteiner2}>
      <label className={style.encabezado}>¿Qué País está buscando?</label>
      <input className={style.place}
       placeholder="Nombre..."/>
        <button className={style.b} onClick={reset}>X</button>
      </div>
      <div className={style.btn}>
        <Btn tipo="submit" props={handleClick} nombre={"Find"}/>    
      </div>
      {
    !search?<h4></h4>:<Card country={find}/>
    }
      </form>   
  </div>  
  </>
  )
}