listadoLinks = ["./funciones/indexFormulario.html","./funciones/indexListGroups.html","./funciones/indexNavs.html"];
console.log(listadoLinks);

opciones = document.getElementsByTagName("article");

let redirigir1 = () =>{
    location.href = "./funciones/indexNavs.html";
}

let redirigir2 = () =>{
    location.href = "./funciones/indexListGroups.html";
}

let redirigir3 = () =>{
    location.href = "./funciones/indexFormulario.html";
}




// opciones[0].addEventListener('click',() => {
//     location.href = "./funciones/indexFormulario.html";
// });