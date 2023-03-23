import style from "./Btn.module.css"

export default function Btn({ nombre, props, tipo }) {
  return (
    <div>
        <button className={style.btn} 
         type ={tipo} 
         onClick={props}
         >
          {nombre}
        </button>
    </div>
  )
}