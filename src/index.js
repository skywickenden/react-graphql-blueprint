import React from "react";
import ReactDom from "react-dom";

const App = () => (
  <div>React content</div>
);

const wrapper = document.getElementById("react-wrapper");
ReactDom.render(<App />, wrapper);
