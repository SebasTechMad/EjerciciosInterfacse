const nav = document.querySelector(".nav");
const abrir = document.querySelector("#btnAbrirMenu");
const cerrar = document.querySelector("#btnCerrarMenu");

const articulos = document.getElementsByClassName("info");

console.log(articulos);

//EVENTOS PARA MENÚ HAMBURGUESA
abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    abrir.classList.add("invisible");
});

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
    abrir.classList.remove("invisible");
});


for (const articulo of articulos) {
     articulo.addEventListener("click", () =>{
        //location.href = `./articulos/${articulo.id}.html`;
        location.href = "articulos/"+articulo.id+".html";
     });
  }


//EVENTO ARTICULOS


