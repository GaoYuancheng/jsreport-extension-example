import React from "react";
import ReactDOM from "react-dom";

import { creatStudio } from "../configuration/Studio";
import fetchExtensions from "../configuration/fetchExtensions";

const Studio = (window.Studio = creatStudio());

fetchExtensions();

const App = () => {
  return (
    <div>
      <h2>exampleComponents</h2>
      {Studio.exampleComponents.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
