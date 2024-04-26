function cambiar(){
    document.getElementById("cambio").innerHTML = "Adiós";
    cambio.style.background = "orange";
}

document.getElementById('cambio').onclick = function(){
    cambiar()
}


document.getElementById("otroColor").addEventListener("click", clickear);

function clickear() {

    document.getElementById("otroColor").style.color = "brown";

}

