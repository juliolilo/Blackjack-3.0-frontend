import React, { useState, useEffect } from 'react';

import * as ReactDOMClient from 'react-dom/client';



export default function Boton(){
    let tablero = React.createElement("h1", {className:"prueba"}, "First React Element");
    const root = ReactDOMClient.createRoot(
        document.querySelector('.prueba')
      )
      
    
    
   


    
    function createCard(){
        
    }

    const rendirse = () =>  {
        console.log("hola");
        var rendido = document.createElement("div");
        rendido.classList.add("rendido");
        rendido.innerHTML = 
        `<div class="contenedor-img"></div>`
        tablero.appendChild(rendido);
    }

    return(
        <div
        onClick={ rendirse}
        className='robar opcion'>Robar        
        </div>
    );
}