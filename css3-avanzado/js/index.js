let menu = document.getElementById('menu');
let chkMenu = document.getElementById('chkMenu');
let titulo = document.getElementById('lblTitle');
let informacion = document.getElementById('lblInformation');
let iframe = document.getElementById('frameEjemplos');

var visible = false;

function validateShadow(){
    return visible;
}

var zoomFrame = (zoom) =>{
    iframe.style.zoom = zoom;
}


let roundedCorners = () =>{
    titulo.textContent = "Rounded Corners";
    if(validateShadow){
        visible = false;
        titulo.style.textShadow = "none";
    }

    informacion.textContent = "Esta propiedad nos permite redondear una esquina/esquinas de cualquier elemento que indiques";
    document.getElementById('frameEjemplos').src = "./ejemplos/roundedCorners.html";
    zoomFrame(1);
}

let BorderImages = () =>{
    if(validateShadow){
        visible = false;
        titulo.style.textShadow = "none";
    }
    
    titulo.textContent = "CSS Border Images";
    informacion.textContent = "Esta propiedad añade un borde con una imagen que nos defina el usuario";
    iframe.src = "./ejemplos/borderImages.html";
    zoomFrame(2);
}

let Backgrounds = () =>{
    if(validateShadow){
        visible = false;
        titulo.style.textShadow = "none";
    }
    
    titulo.textContent = "CSS Backgrounds";
    informacion.textContent = "Esta propiedad nos permite añadir imagenes como fondo de pantalla, las imágenes que tu quieres, si quieres que se repita, en qué posición se cargará, etc...";
    iframe.src = "./ejemplos/background.html";
    //zoomFrame(3);
    
}

let Colors = () =>{
    if(validateShadow){
        visible = false;
        titulo.style.textShadow = "none";
    }
    
    titulo.textContent = "CSS Colors";
    informacion.textContent = "Esta propiedad es una alternativa para poder poner fondos de pantalla sólidos con colores. Se pueden hacer dos maneras conocidas, tanto con RGB como con HSL. Con alguna actualización de css, se puede poner hsl o rgb y utilizar como cuarto parámetro directamente 'Alpha' o transparencia";
    iframe.src = "./ejemplos/colors.html";
    zoomFrame(3);
}

let Colorskeywords = () =>{
    if(validateShadow){
        visible = false;
        titulo.style.textShadow = "none";
    }
    
    titulo.textContent = "CSS Keywords";
    informacion.textContent = "Esta propiedades son palabras claves en CSS que podemos utilizar. En este caso tenemos Transparent, CurrentColor y Inherit.";
    iframe.src = "./ejemplos/keywords.html";
    zoomFrame(2);
}

let  Gradients = () =>{
    if(validateShadow){
        visible = false;
        titulo.style.textShadow = "none";
    }
    
    titulo.textContent = "CSS Gradients";
    informacion.textContent = "Esta propiedad es una alternativa para poder poner fondos de pantalla sólidos con colores. Se pueden hacer dos maneras conocidas, tanto con RGB como con HSL. Con alguna actualización de css, se puede poner hsl o rgb y utilizar como cuarto parámetro directamente 'Alpha' o transparencia";
    iframe.src = "./ejemplos/gradients.html";
    zoomFrame(2);
}

let Shadows = () =>{
    titulo.textContent = "CSS Text shadow";
    if(!validateShadow()){
        visible = true;
        titulo.style.textShadow = "2px 2px 4px grey";
    }
    informacion.textContent = "Esta propiedad es una alternativa para poder poner fondos de pantalla sólidos con colores. Se pueden hacer dos maneras conocidas, tanto con RGB como con HSL. Con alguna actualización de css, se puede poner hsl o rgb y utilizar como cuarto parámetro directamente 'Alpha' o transparencia";
    iframe.src = "./ejemplos/shadows.html";
    zoomFrame(2);
}


