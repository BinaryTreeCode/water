var agua1_ID = document.getElementById("agua1");
var agua2_ID = document.getElementById("agua2");

var dia1 = document.getElementById("dias1");
var dia2 = document.getElementById("dias2");

var agua1_value = 1000;
var agua2_value = 1000;

var dia = 0;
const music = new Audio('gota de agua.mp3');

function gota() {

    if (agua2_value > 0) {
    agua1_value -= 227;
    console.log(agua1_value);

    agua2_value -= 50;
    console.log(agua2_value);

    agua1_ID.innerHTML = agua1_value + "Litros";
    agua2_ID.innerHTML = agua2_value + "Litros";

    dia += 1;

    dia1.innerHTML = dia + " dias";
    dia2.innerHTML = dia + " dias";
    music.play();
    music.volume = 0.1;
    setTimeout("gota()", 1000)
    }
    else {
        document.write('No desperdicies mas agua https://www.youtube.com/watch?v=zM9eD1eLxFM');

    }
}

// escucha hacer click en la pagina

addEventListener("click", function () {
    gota();
});