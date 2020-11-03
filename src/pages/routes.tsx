import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./Landing";
import Results from './Results/index';
import Historico from "./Historico";
import SimpleMap from "./SimpleMap/index";

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/Results/:cnpj" component={Results} />
      <Route path="/Historico" component={Historico} />
      <Route path="/SimpleMap/:nome/:cnpj/:latitude/:longitude" component={SimpleMap} />
    </Router>
  );
}

export default Routes;
