import React from "react";
import ReactDOM from "react-dom";

export default function Boton() {
  const createElement = () => {
    const parent = document.querySelector(".parent");
    console.log(parent);
    var newElement = document.createElement("div");
    newElement.classList.add("rendido");
    newElement.innerText = "New Element";
    parent.appendChild(newElement);
  };

  return (
    <div className="parent">
      <button onClick={createElement}>Create Element</button>
    </div>
  );
  const rootElement = document.getElementById("root");
    ReactDOM.render(<Boton />, rootElement);
}

