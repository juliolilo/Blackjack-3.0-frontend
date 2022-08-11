export default function Boton(){


    /*tablero = document.querySelector(".tablero");*/
    function createCard(){
        
    }

    const rendirse = () =>  {
        console.log("hola");
        var rendido = document.createElement("div");
        rendido.classList.add("rendido");
        rendido.innerHTML = 
        `<div class="contenedor-img"></div>`
        /*tablero.appendChild(rendido);*/
    }

    return(
        <div
        onClick={rendirse}
        className='robar opcion'>Robar        
        </div>
    );
}