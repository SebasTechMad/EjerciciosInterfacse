let dark_color_primario = "#2a2a2a";
let dark_color_secundario = "#2c2c2c";
let dark_text = "white";

let light_color_primario = "white";
let light_color_secundario = "white";
let light_text = "black";

let darkMode = true;



let prueba = () =>{
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