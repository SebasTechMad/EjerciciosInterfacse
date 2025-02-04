let dark_color_primario = "#2a2a2a";
let dark_color_secundario = "#2c2c2c";
let dark_text = "white";

let light_color_primario = "white";
let light_color_secundario = "white";
let light_text = "black";

let darkMode = true;


let opcionesCerradas = true;



let cambioColores = () =>{
    if(darkMode == false){
        document.documentElement.style.setProperty("--color-primario",dark_color_primario);
        document.documentElement.style.setProperty("--color-secundario",dark_color_secundario);
        document.documentElement.style.setProperty("--color-texto",dark_text);
        darkMode = true;
    }else{
        document.documentElement.style.setProperty("--color-primario",light_color_primario);
        document.documentElement.style.setProperty("--color-secundario",light_color_secundario);
        document.documentElement.style.setProperty("--color-texto",light_text);
        darkMode = false;
    }
}

let abrirOpciones = () =>{
    let btnMenu = document.getElementById("btnMenu");
    let btnOpciones = document.getElementsByName("opciones");

    if(opcionesCerradas){
        btnMenu.classList.add("button-abrir-animation");
        btnMenu.classList.remove("button-cerrar-animation");

        btnOpciones[0].classList.add("primer-boton-aparecer");
        btnOpciones[0].classList.remove("primer-boton-desaparecer");

        btnOpciones[1].classList.add("segundo-boton-aparecer");
        btnOpciones[1].classList.remove("segundo-boton-desaparecer");

        opcionesCerradas = false;
    }else{
        btnMenu.classList.add("button-cerrar-animation");
        btnMenu.classList.remove("button-abrir-animation");

        btnOpciones[0].classList.add("primer-boton-desaparecer");
        btnOpciones[0].classList.remove("primer-boton-aparecer");
        
        btnOpciones[1].classList.add("segundo-boton-desaparecer");
        btnOpciones[1].classList.remove("segundo-boton-aparecer");

        opcionesCerradas = true;
    }
}