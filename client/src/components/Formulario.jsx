import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Btn from "./Btn"
import { getCountries } from "../redux/actions";
import validar from  "../utils/validator";

import style from "./Formulario.module.css";


export default function Formulario() {
 const country = useSelector((state) => state.country);
 const dispatch = useDispatch()
const history = useHistory() 
 useEffect(()=>{
  dispatch(getCountries())
}, [dispatch]);

 const [input, setInput] = useState({
    idCountry:[],
    nombre:"",
    duracion:"",
    dificultad:"",
    temporada:"",
  });

  const [error, setError] = useState({
    idCountry:[],
    nombre:"",
    duracion:"",
    dificultad:"",
    temporada:"",
  });

  function handleChange(e){
    setError(validar({
      ...input,
      [e.target.name] : e.target.value
    }))
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  }

  const handleOption = (e) => {
    const value = 
    Array.from(e.target.selectedOptions, (option) => option.value);
    setInput({
        ...input,
        [e.target.name]: value,
    });
}; 

function handleSubmit(e) {
  e.preventDefault()
axios.post("/activity", input)
.then(alert(`${input.nombre} adicionada al pais:  ${input.idCountry}`))
.catch (error => {alert("No fue creado" , error)})
}

function reset(){
  history.push("/home")
  setInput("")
}
  return (
    <>
    <div className={style.conteiner}>
    <form  className ={style.form}onSubmit={handleSubmit}>
      
      <div>
      <label className={style.label}>País </label><br />
        <select  
          name="idCountry" 
          multiple size ="2"
          defaultValue={"DEFAULT"}
          onChange={handleOption} 
          className={error.idCountry && style.warning}
        >
        <option value="DEFAULT" disabled>Seleccione un pais ....</option>
          {
          country && country.map((code) => (
          <option key={code.id} value={code.id}>
            {`${code.id}: `}
            { code.name }
        </option>
        ))}
      </select>
      {
      error.idCountry && <h5 className={style.danger}>{error.idCountry}</h5>} 
      </div>
    
    <div>
      <label className={style.label}>Nombre</label><br />
        <input  
          placeholder="nombre" 
          type="text"
          name="nombre"
          onChange={handleChange}
          className={error.nombre && style.warning}
        />
        {error.nombre && <p className={style.danger}>{error.nombre}</p>}
    </div>
   
    <div>
      <label className={style.label}>dificultad</label><br />
        <input 
          placeholder="dificultad"
          type="number"
          min={1}
          max={5}
          name="dificultad"
          onChange={handleChange}
          className={error.dificultad && style.warning}
        />
        {error.dificultad && <p className={style.danger}>{error.dificultad}</p>}
    </div>
  
    <div>
      <label className={style.label}>Duracion</label><br />
          <input 
            placeholder="duracion 00 horas 00 minutos"
            type="text" 
            name="duracion"
            onChange={handleChange}
            className={error.duracion && style.warning}
          />
          {error.duracion && <p className={style.danger}>{error.duracion}</p>}
      <div>
      <label className={style.label}>Temporada</label><br />
          <input 
            placeholder="temporada"
            type="text"
            name="temporada"
            onChange={handleChange}
            className={error.temporada && style.warning}
          />
          {error.temporada && <p className={style.danger}>{error.temporada}</p>}
      </div>
      <div className={style.btn}>
      {
      error.idCountry || error.nombre ||error.dificultad || error.duracion || error.temporada ?
        <h1 className={style.label}>{`¡Comienza a crear tu actividad!`}</h1> :
        <Btn nombre="Submit" tipo="submit" ></Btn>
      }
    </div>
    </div>
  </form>
  <div className ={style.btn}>
  <Btn   nombre = "Salir" props = { reset}></Btn>
  </div>

    </div>  
  </>
  )
}
