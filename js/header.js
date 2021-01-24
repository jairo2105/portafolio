var btn = document.getElementById("btnMenu");
var barras = document.getElementsByClassName("bar");
var lista = document.getElementById("op");
var logo = document.getElementsByClassName("anim");
var opcion = document.getElementsByClassName("opcion");
//inicio habilidades proyectos contacto
var inicio = document.getElementById("ini");
var habilidades = document.getElementById("hab");
var proyectos = document.getElementById("proy"); 
var contacto = document.getElementById("cont");

btn.addEventListener("click",btnAnimacionStart);
function btnAnimacionStart(){
    lista.style.marginLeft="0";
    barras[0].style.transform="rotate(-45deg)"
    barras[1].style.width="0px"
    barras[2].style.transform="rotate(45deg)"
    btn.removeEventListener("click",btnAnimacionStart);
    btn.addEventListener("click",btnAnimacionEnd);
}
function btnAnimacionEnd(){
    lista.style.marginLeft="-100%";
    barras[0].style.transform="rotate(0deg)"
    barras[1].style.width="40px"
    barras[2].style.transform="rotate(0deg)"
    btn.removeEventListener("click",btnAnimacionEnd);
    btn.addEventListener("click",btnAnimacionStart);
}

