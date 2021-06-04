import React from "react";
import {Switch, Route} from "react-router-dom";
import PersonajesStarWars from './components/PersonajesStarWars';

import Header from "./components/Header";
import PersonajeIndividual from "./components/Personaje";

function App() {
  
  return (
    <>
      <Header />
      <div className="container-sm">
        <Switch>
          <Route exact path="/" component={PersonajesStarWars} />
          <Route path="/personaje/:id" component={PersonajeIndividual} />
        </Switch>
      </div>
      
    </>
    
  );
}

export default App;
