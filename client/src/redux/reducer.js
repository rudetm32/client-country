import {
    GET_DETAIL,
    GET_COUNTRIES,
    SEARCH_NAME,
    GET_ACTIVITY,
    ORDER,
    ORDER_POPULATION,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
} from "./actions";

const initialState = {
    country : [],
    copyCountry :[],
    details : [],
    findOne : [],
    activity:[],
};

function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                country: payload,
                copyCountry:payload 
            };
        case GET_ACTIVITY:
            return {
                ...state,
                activity: payload
            };
        case GET_DETAIL:
            return {
                ...state,
                details: payload
            };
        case SEARCH_NAME:
            
            const filter = [...payload]
            return {
                ...state,
                findOne: filter
            };
       
        case ORDER:
            const orderCopy = {
                ...state.country
            };
            let objeto = Object.values(orderCopy);
            let compara = objeto.sort(function (a, b){
                return a.name.localeCompare(b.name)
            });
            const orderCountry = compara.sort((a,b)=>{
                if(a.name > b.name){
                    return "asc"=== payload ? 1 : -1
                };
                if(a.name < b.name){
                    return "desc"=== payload ? 1 : -1
                };
                return 0;
            });
            return {
                ...state,
            country:orderCountry
            };
        case ORDER_POPULATION:
            const orderCopyPopulation = {
                ...state.country
           };
            let obj = Object.values(orderCopyPopulation);
            let mayor = obj.sort(function (a, b){
                return a.population - b.population
            });
            const orderPopulation = mayor.sort((a,b)=>{
                if(a.population < b.population){
                    return "may"=== payload ? 1 : -1
                };
                if(a.population > b.population){
                    return "min"=== payload ? 1 : -1
                };
                return 0
            });
            return {
                ...state,
                country:orderPopulation
            };
        case FILTER_CONTINENT:
            const filterC = [
                ...state.copyCountry
            ];
            const continente = filterC.filter((continente) => continente.continent === payload);
        return{
            ...state,
                country:continente
        };
        case FILTER_ACTIVITY:
            
			const activities = [...state.copyCountry.filter((act)=>{
                return 	act.activities 
			})];

			const filtActivity = activities.filter(name => {
                return(
                    name.activities.find(element => element.nombre === payload)
                )});
			return{
				...state,
				country: filtActivity
			};       
        default:
            return state
    };
};
export default rootReducer;