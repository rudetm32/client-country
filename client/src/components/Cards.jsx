import style from "./Cards.module.css"

export default function Cards({params}) {
  
return (
    <>
    <div className={style.container} key={params.id}>
      <img src={params.image} alt="Not found" height="100px" width="195px"></img>
     <div className={style.texto}>
       <p>{params.name}</p>
       <p>{params.continent}</p>
     </div>
      
    </div>
    </>
  )
}
