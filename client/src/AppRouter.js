import React from 'react'
import { Switch, Route } from "react-router-dom";

import Board from "./components/Board";
import Home from "./components/Board/home";

const Index = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/board/:id" exact component={Board} />
    </Switch>
   );
}

export default Index;