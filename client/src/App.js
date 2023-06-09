import { Route, useLocation } from "react-router-dom";


import Landing from './components/Landing';
import Home from './components/Home';
import Formulario from "./components/Formulario";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";

import axios from "axios"
import './App.css';
import SearchBar from "./components/SearchBar";
//axios.defaults.baseURL= "http//localhost:3001";
axios.defaults.baseURL= "https://server-countries-production-2ad9.up.railway.app";

function App() {
  const location = useLocation()
  return (
    <>
    {
    location.pathname !== "/" && <NavBar/>
    } 
      <div className="App">
        <Route exact path="/" component={ Landing }></Route>
        <Route path="/home" component={ Home }></Route>
        <Route path="/formulario" component={ Formulario }></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/search" component={SearchBar}></Route> 
      </div>
    </>
  );
}

export default App;
