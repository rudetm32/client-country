import Cards from "./Cards"
import { Link } from "react-router-dom";
import style from "./Card.module.css"


export default function Card({country}) {
 const allcountry = country;

return (
  <div className={style.conteiner} >
    {
    allcountry.length?
    allcountry?.map((element) => (
      <Link to={`/detail/${element.id}`} key={element.id} className={style.deco}>
      <Cards  params={element}/>
      </Link>
    )):<h1>Loading...</h1>
    }
  </div>
  );
};
