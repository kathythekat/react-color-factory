import React from "react";
import { useParams, Redirect } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  console.log(color);
  //ask about this
  if (!colors.includes(color)) {
    return <Redirect to="/colors" />;
  }
  return (
    <div
      style={{ backgroundColor: color, width: "200px", height: "200px" }}
    ></div>
  );
}
export default Color;
