//pregunto la fecha y hora, está fuera de p5.js
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (6 < laHora && laHora < 12) {
    elSaludo = "Es hora de un desayunito";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "El día sigue, dale con todo";
} else {
    elSaludo = "A dormir";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("portada")) {
    // true y false no tienen "" porque el valor es 0 y 1
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
// Se empieza a buscar la biblioteca de p5, antes se estaba usando solo JS
function preload() {
    //se va a un Json (api) para tener los datos, CON ESTA FUNCIÓN SE ESTÁ DICIENDO QUE SE CREA UNA VARIBLE API y luego que se carguen esos datos api caundo se ocupe la varible api.
    var api = "https://swapi.dev/api/people/?page=3&format=json";
    // lo que se encontró en JSON se ocupa
    starWars = loadJSON(api); 
}
//tomo el main
var loPrincipal = document.querySelector("main");

var x, y;

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    // createA --> se crea un vinculo
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        x = Math.round(random(0,1)*10);
        portada();
    } else {
        y = Math.round(random(0,1)*10);
        pagina();
    }
}
// Lo que hace lo que vienes y lo que genera que en uno de los parentesis haya un 0 y en el otro un 1, cundo se tiene 0 se está indicando que se quiere solo el primer elemento del resultado, la info del 0 aparece en el index y la info del 1 aparece en el page.
function portada() {
    createSpan(" ¿Sabías que " + starWars.results[x].name + " nació el año " + starWars.results[x].birth_year + "?").parent("contenido");
    //Color vinculo index
    select("a:nth-child(1)").style("color", "#EFEE1B");
}
function pagina() {
    createSpan(" ¿Sabías que " + starWars.results[y].name + " tiene la piel de color " + starWars.results[y].skin_color + "?").parent("contenido");
    //color vinculo page
    select("a:nth-child(2)").style("color", "#EFEE1B");
}