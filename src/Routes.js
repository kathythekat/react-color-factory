import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Color from "./Color";
import ColorForm from "./ColorForm";
import ColorHeader from "./ColorHeader";

function Routes({ colors, addColor }) {
  //make another component for 11-16
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorHeader />
        {colors.map((color) => (
          <div>
            <Link to={`/colors/${color}`}>{color}</Link>
          </div>
        ))}
      </Route>
      <Route exact path="/colors/new">
        <ColorForm addColor={addColor} />
      </Route>
      <Route path="/colors/:color">
        <Color colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
