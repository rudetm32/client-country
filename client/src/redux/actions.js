import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const ORDER = "ORDER";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";


export function getCountries(){
    return async function(dispatch){
        try{
            let response = await axios.get("https://server-countries-production-2ad9.up.railway.app/countries");
            return dispatch({
            type: GET_COUNTRIES,
            payload: response.data,
        });
        } catch (error) {
            alert(error) 
        }
    }
};
export function getActivity(){
    return async function (dispatch){
        try {
            let response = await axios.get(`https://server-countries-production-2ad9.up.railway.app/activity`)
            return dispatch({
                type: GET_ACTIVITY,
                payload: response.data
            });     
        } catch (error) {
            alert(error);
        }
    }
};
export function getDetail(id){
    return async function(dispatch){
        try {
            let response = await axios.get(`https://server-countries-production-2ad9.up.railway.app/countries/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            });
        } catch (error) {
            alert(error);
        }
    }
};
export function searchName(name){
    return async function(dispatch){
        try{
            const response = await axios.get(`https://server-countries-production-2ad9.up.railway.app/countries?name=${name}`)
            const result = response.data
            return  dispatch({
                    type: SEARCH_NAME,
                    payload: result
                })
        }catch (error){
            alert(`No existe el país a buscar.\nLa búsqueda es sensible a palabras con tilde.`);
        }
    }
};
export function order(props){
    return {
        type: ORDER,
        payload: props
    }
};
export function orderPopulation(props){
    return {
        type: ORDER_POPULATION,
        payload: props
    }
};
export function filtContinent(props){
    return {
        type: FILTER_CONTINENT,
        payload: props
    }
};
export function filtActivity(props){
    return {
        type: FILTER_ACTIVITY,
        payload: props
    }
}; 

