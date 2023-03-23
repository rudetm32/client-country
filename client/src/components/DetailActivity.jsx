import React from 'react';

import style from "./Detail.module.css";

export default function DetailActivity({pais}){
    if (pais && pais.length > 0) {
        return (
        <>
        <div>
            <h4>{`Actividades para realizar en este País`}</h4>
        </div>
        <table className={style.separado}>
            {
            pais.map((el)=>{
                return(
                <tbody key={el.id}>
                    <tr>
                        <th>Nombre</th>    
                        <th>Duración</th>
                        <th>Dificultad</th>                                 
                        <th>Temporada</th>
                    </tr>
                    <tr>
                        <td>{el.nombre}</td>    
                        <td>{el.duracion}</td>
                        <td>{el.dificultad}</td>                                 
                        <td>{el.temporada}</td>
                    </tr>
                </tbody>
                    )
                })
            }
        </table>
        </>
        )
    }
    else {
        return <h3>{`Este País no tiene actividades creadas`}</h3>
    }
}

