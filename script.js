let menuVisible = false;
//Función que oculta o muestra el menu
function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function effectSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("autocad");
        skills[1].classList.add("autodesk");
        skills[2].classList.add("vray");
        skills[3].classList.add("rendering");
        skills[4].classList.add("adobeps");
        skills[5].classList.add("comunication");
        skills[6].classList.add("teamwork");
        skills[7].classList.add("creativity");
        skills[8].classList.add("marketing");
        skills[9].classList.add("project");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    effectSkills();
} 


var btn = document.querySelector("button");
btn.onclick = ()=>{
    window.print();
}