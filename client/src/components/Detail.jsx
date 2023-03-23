import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";


import Btn from "./Btn";
import { getDetail } from "../redux/actions";
import DetailActivity from "./DetailActivity";

import style from "./Detail.module.css";


export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.details)

    useEffect(()=>{
        dispatch(getDetail(id));
    }, [dispatch, id]);

    return (    
    <>
    <div className={style.conteiner}>
    <div className={style.detail}>
        <div>
            <img  className={style.img} src={detail.image} alt="Not found"></img>
            <br />
            <div>
            <DetailActivity pais={detail.activities}/>
        </div>
        </div>
        <div className={style.texto}>
            <h4>{`Nombre      ${detail.name}`}</h4>
            <h5>{`Continente  ${detail.continent}`}</h5> 
            <h5>{`Capital     ${detail.capital}`}</h5>
            <h5>{`Subregion   ${detail.subregion}`}</h5>
            <h5>{`Area        ${detail.area} m2`}</h5> 
            <h5>{`Poblacion   ${detail.population}`}</h5>
        </div> 
    </div>
          
        <div className={style.btn}>
            <Link to="/home">
                <Btn nombre={"Regresar"}/>
            </Link>
        </div>
    </div>
    
    </>
    )
};
