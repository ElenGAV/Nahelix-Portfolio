let menuVisible = false;
// Función para ocultar o mostrar menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//funcion animaciones
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades [0].classList.add("espanol");
        habilidades [1].classList.add("ingles");
        habilidades [2].classList.add("aleman");
    }
}

window.onscroll = function(){
    efectoHabilidades()
}