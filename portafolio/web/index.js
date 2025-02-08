let dark_color_primario = "#2a2a2a";
let dark_color_secundario = "#2c2c2c";
let dark_text = "white";

let light_color_primario = "white";
let light_color_secundario = "white";
let light_text = "black";

let t_blanco = "text-light";
let t_negro = "text-dark";

let darkMode = true;
let preguntasAbiertas = false;


let opcionesCerradas = true;

var msg_preguntas;
let preguntas;
let user_respuesta;
let bot_respuesta;
let trigger_preguntas;
const respuestas = ["1","2","3","4","5"];

let cargarVariables = () =>{
    msg_preguntas = document.getElementById("preguntas");
    preguntas = document.getElementById("barChat");
    

    preguntas.addEventListener("click",animationPreguntas);
    

    trigger_preguntas = document.getElementsByName("pregunta");

    trigger_preguntas[0].addEventListener("click",addConversacionQuienEres);

}

var addConversacionQuienEres = () =>{
    user_respuesta = document.getElementById("msg_user");
    bot_respuesta = document.getElementById("msg_bot");

    user_respuesta.innerHTML += "<h1>quien sos</h1>";
}







let animationPreguntas = () =>{

    if(preguntasAbiertas == false){
        console.log(msg_preguntas);
        msg_preguntas.classList.add("preguntas-aparecer-animation");
        msg_preguntas.classList.remove("preguntas-desaparecer-animation");
        preguntasAbiertas = true;
    }else{
        console.log(msg_preguntas);
        msg_preguntas.classList.remove("preguntas-aparecer-animation");
        msg_preguntas.classList.add("preguntas-desaparecer-animation");
        preguntasAbiertas = false;
    }




}


let cambioColores = () =>{
    
    let barra_divisora_msg = document.getElementsByTagName("hr");

    if(darkMode == false){
        document.documentElement.style.setProperty("--color-primario",dark_color_primario);
        document.documentElement.style.setProperty("--color-secundario",dark_color_secundario);
        document.documentElement.style.setProperty("--color-texto",dark_text);

        barra_divisora_msg[0].classList.replace("border-dark","border-light");

        cambioColoresIconos(t_blanco);

        darkMode = true;
    }else{
        document.documentElement.style.setProperty("--color-primario",light_color_primario);
        document.documentElement.style.setProperty("--color-secundario",light_color_secundario);
        document.documentElement.style.setProperty("--color-texto",light_text);
        
        barra_divisora_msg[0].classList.replace("border-light","border-dark");

        cambioColoresIconos(t_negro);

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

let cambioColoresIconos = (color) =>{
    let current_iconos = document.getElementsByTagName("i");

    for (const icono of current_iconos) {
        if(color == "text-light"){
            icono.classList.replace("text-dark", color);
            

        }else{
            icono.classList.replace("text-light", color);
        }
    }
}


