import React from "react";
import "../public/index.scss";
import addcart from "../img/addcart.svg";

export function SubApp({ title }) {
  return <p className="title">{title}</p>;
}

function App() {
  return (
    <div>
      <SubApp title="Hello React App!!" />
      <p className="sub">Study React</p>
      <img src={addcart} />
    </div>
  );
}

export default App;
