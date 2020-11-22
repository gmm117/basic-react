import React from "react";

export function SubApp({ title }) {
  return <p>{title}</p>;
}

function App() {
  return (
    <div>
      <SubApp title="Hello React App!!" />
      <p className="sub">Study React</p>
    </div>
  )


}

export default App;
