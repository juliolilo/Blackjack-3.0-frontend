import React from "react";
import ReactDOM from "react-dom";

export default function Boton() {
  const rendirse = () => {
    const parent = document.querySelector(".dealer-cards");
    var newElement = document.createElement("img");
    newElement.classList.add("card");
    newElement.innerText = "New Element";
    /*newElement.innerHTML = " <img className='card' src='cards/BACK.png'></img>";*/
    //newElement.src = 'cards/BACK.png';
    let number = getRandomInt(2,11);
    newElement.src = "./cards/" + number + "-C.png";
    parent.appendChild(newElement);
  };

  const handleClick = () => {
    rendirse();
    /*getRandomInt(3);*/
  };

  function getRandomInt(max,min) {
    return Math.floor(Math.random() * (max - min) + min);

  }
  
  
  // expected output: 0, 1 or 2
  
    return(
    <div
    onClick={handleClick}
    
    className='robar opcion'>Robar        
    </div>
);
/*const rootElement = document.getElementById("root");
  ReactDOM.render(<Boton />, rootElement);*/

}
    