const nav = document.querySelector(".nav");
const abrir = document.querySelector("#btnAbrirMenu");
const cerrar = document.querySelector("#btnCerrarMenu");

console.log(abrir);

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    abrir.classList.add("invisible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
    abrir.classList.remove("invisible");
})