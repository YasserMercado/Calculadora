const pantalla = document.querySelector(".pantalla"); //Trae la pantalla.
const botones = document.querySelectorAll(".btn"); //Trae todos los botones.

botones.forEach(boton => {
    boton.addEventListener("click", () => { //Cuando el evento es un "click" se activa la funcion.
        const botonApretado = boton.textContent;

        if (boton.id === "reset"){ //Elimina todos los elementos de la pantalla y corta la funcion.
            pantalla.textContent = 0;
            return;
        }

        if (boton.id === "borrar"){ //Borra el ultimo elemento de la pantalla y corta la funcion.
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR"){ //Determina si queda un solo elemento o si es ERROR.
                pantalla.textContent = "0";    
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1); //Elimina el ultimo elemento de array.
            }
            return;
        }

        if (boton.id === "igual") { //Ejecuta la funcion 'eval' para calcular todo o de lo contrario da ERROR.
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "ERROR"
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") { // Si la pantalla es 0 o ERROR coloca el boton apretado, de lo contrario añada el ultimo boton apretado a el array.
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
        
    })
})