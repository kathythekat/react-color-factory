import React from "react";
import { Link } from "react-router-dom";

function ColorHeader() {
  return (
    <div>
      <h1>Color Factory</h1>
      <Link to="/colors/new">Add Color</Link>
    </div>
  );
}

export default ColorHeader;
