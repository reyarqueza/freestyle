import React from "react";
import ReactDOM from "react-dom";
import ToggleStatus from "./jsx/ToggleStatus.jsx";
import Increment from './jsx/Increment.jsx';
import ToDo from "./jsx/Todo.jsx";
import ControlledTextInput from "./jsx/ControlledTextInput.jsx";

console.log("React.version", React.version);
ReactDOM.render(
  <div>
    <h1>Hooks Examples</h1>
    <hr />
    <Increment />
    <ToggleStatus />
    <ToDo />
    <ControlledTextInput />
  </div>,
  document.getElementById("root")
);
