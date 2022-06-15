import React from "react";
import ReactDOM from "react-dom";
import ToggleStatus from "./jsx/ToggleStatus.jsx";

console.log("React.version", React.version);
ReactDOM.render(
  <div>
    <h1>Hooks Examples</h1>
    <ToggleStatus />
  </div>,
  document.getElementById("root")
);
