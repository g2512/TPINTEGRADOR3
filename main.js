
//evenlistener para detectar cuando hacen click en Button Resumen
let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

//evenlistener para detectar cuando hacen click en el Button Borrar
let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

//evenlistener para detectar cuando hacen click en el input Cantidad
let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);

//evenlistener para detectar cuando hacen click en el input Categoria
let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);


// ******* FUNCION TICKETSPRICE *****************
function ticketsPrice(evento) {
    console.log(evento);
    //Usamos preventDefault() para que no se refresque el formulario
    evento.preventDefault();

    //leemos el valor del input cantidad
    let ticketsQuantity = document.querySelector(".ticketsQuantity");
   /* let regexEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.;
    let dirmail=document.getElementById("Email");*/
    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;

        switch (ticketsCategory.value) {
            case "Sinctegoria": {
                totalPayment = 200 * ticketsQuantity.value * 1;
                break;
            }case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                break;
            }
        }
       /** if(!regexEmail.test(dirmail.value))
        {warnings+= "Mail no valido"};**/
        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;
    } else {
        document.querySelector(".ticketsQuantity");
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "Ingrese una cantidad válida";
        alert("Ingrese una cantidad válida");
    }
}
function borrarOutput() {

    document.querySelector(".ticketsOutput").textContent = "Total a pagar:"; let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className);
    }
}