import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux"

import Btn from './Btn';
import Card from "./Card";
import { getCountries, order, orderPopulation, filtContinent, filtActivity, getActivity } from "../redux/actions"

import style from "./Home.module.css";
import s from "./Btn.module.css";
  
export default function Home() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getCountries())
    dispatch(getActivity())
  }, [dispatch]);
  
  const country = useSelector((state) => state.country)
  const actividad = useSelector((state) => state.activity)

  const [pagina, setPagina]= useState(0);
  const paginado =country.slice(pagina, pagina + 10);
  const prevPagina = () =>{
    pagina > 0 ?
    setPagina(pagina -10) :
    alert("Inicio de página")
  }
  const nextPagina = () => {
    pagina < 240 ?
    setPagina(pagina + 10) : 
    alert("No hay otros países que mostrar.")
  };

  function handleOrder(e) {
    const {name, value} = e.target;
    if(name === "order"){
      dispatch(order(value))
    }
    if(name === "poblacion"){
      dispatch(orderPopulation(value))
    }
    if(name=== "filContinente"){
      dispatch(filtContinent(value))
    }  
  };

  function handleActivity(e){
		dispatch(filtActivity(e.target.value))
	};

  function reset() {
    dispatch(getCountries())
  };

  
  return (
    <div className={style.conteiner}>
    
      <div className={style.filtros}>
      <select className={style.b} name='order' defaultValue={"DEFAULT"} onChange={handleOrder}>
        <option value="DEFAULT" disabled>Orden alfabetico</option>
        <option value="asc" >Ascendente</option>
        <option value="desc" >Descendente</option>
      </select>
      <select className={style.b} name='poblacion' defaultValue={"DEFAULT"} onChange={handleOrder}>
        <option value="DEFAULT" disabled>Poblacion</option>
        <option value ="may">Paises con mayor poblacion </option>
        <option value ="min">Paises con menor poblacion</option>
      </select>
      <select  className={style.b} name='filContinente' defaultValue={"DEFAULT"} onChange={handleOrder}>
        <option value="DEFAULT" disabled>Seleccione un Continente</option>
        <option value ="North America">North America</option>
        <option value ="South America">South America</option>
        <option value ="Antarctica">Antarctica</option>
        <option value ="Europe">Europe</option>
        <option value ="Africa">Africa</option>
        <option value ="Asia">Asia</option>
        <option value ="Oceania">Oceania</option>
      </select>
      <select  className={style.b} onChange={e=>handleActivity(e)}>
        <option value="activity">Actividades por país</option>
        {
        actividad.map((act)=>(
        <option key={act.id} value={act.nombre}>
          {act.nombre}
        </option>
        ))}
        </select>
        <button className={s.btn} onClick={reset}>Limpiar</button>
      </div>
      
      <div className={style.ordAlb}>
        <Btn  nombre ={"Anterior" } props={prevPagina}/>
        <Btn  nombre ={"Siguiente"} props={nextPagina}/>
      </div>
    
      <div>     
        <Card country={paginado}/> 
      </div> 
    
    </div>
  )
};
