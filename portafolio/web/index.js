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

    let chat = document.getElementById("mensajes");


    user_respuesta = document.getElementById("msg_user");
    bot_respuesta = document.getElementById("msg_bot");

    
    let respuestaU = '<div class="d-flex justify-content-end"><div class="d-flex flex-column align-items-end"><div class="d-flex justify-content-end gap-4"><span><b>Usuario</b></span><span></span></div><div class="d-flex justify-content-end gap-2"><span class="badge text-bg-primary text-light texto-chat text-end" name="mensaje" style="width: fit-content;">¿Quien eres?</span><i class="bi bi-person-circle text-light"></i></div></div></div>';
    let respuestaB = '<div class="align-self-start" id="msg_bot"><div class="d-flex justify-content-start"><div class="d-flex flex-column align-items-start"><div class="d-flex justify-content-start gap-4"><span></span><span><b>Bot</b></span></div><div class="d-flex justify-content-start gap-2"><i class="bi bi-person-circle text-light"></i><span class="badge text-bg-success text-light texto-chat" style="width: fit-content;" name="mensaje"><div class="card mb-3" style="max-width: 400px;"><div class="card-header"><b>Juan Sebastián Osorio</b></div><div class="row g-0"><div class="col-md-4"><img src="./web/srcs/sebasCV.jpg" class="img-fluid rounded-start p-2" alt="Imagen de prueba"></div><div class="col-md-8"><div class="card-body d-flex flex-column align-items-center"><p class="card-text text-center">Desarrollador <strong>full-stack</strong>, enfocado en ser <strong>SecDevOps</strong>, aplicando seguridad en las aplicaciones web, además de haber sido candidato en el <strong>campus de Madrid 42</strong>.</p></div></div></div><div class="card-footer"><div class="d-flex gap-2"><button type="button" class="btn btn-outline-success" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="E-mail copiado"><i class="bi bi-clipboard2-fill"></i></button><a href="./web/srcs/SebastíanOsorio.pdf" target="_blank" class="btn btn-outline-danger"><i class="bi bi-file-earmark-pdf-fill"></i></a><a href="https://www.linkedin.com/in/sebastián-osorio-518728266/" target="_blank" class="btn btn-outline-primary"><i class="bi bi-linkedin"></i></a><a href="https://github.com/SebasTechMad" target="_blank" class="btn btn-outline-dark"><i class="bi bi-github"></i></a></div></div></div></span></div></div></div></div>';
    
    
    
    
    chat.innerHTML += respuestaU;
    chat.innerHTML += respuestaB;
    chat.innerHTML += "<br><br>";
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


