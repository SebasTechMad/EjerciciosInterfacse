opcionesMenu = ["./funciones/indexNavs.html","./funciones/indexListGroups.html","./funciones/indexFormulario.html"];

opciones = document.getElementsByTagName("article");


/*let redirigir1 = () =>{
    location.href = "./funciones/indexNavs.html";
}

let redirigir2 = () =>{
    location.href = "./funciones/indexListGroups.html";
}

let redirigir3 = () =>{
    location.href = "./funciones/indexFormulario.html";
}*/



let loadPages = () => {
    var cont = 0;
    for (const articulo of opciones)
    {
        let ubicacion = opcionesMenu[cont];
        
        articulo.addEventListener('click', () => {
            location.href = ubicacion;
        });

        cont ++;
        
    }
}
