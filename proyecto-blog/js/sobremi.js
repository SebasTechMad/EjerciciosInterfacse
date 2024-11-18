const prototipoPDF = document.getElementById("prototipo");
const reflexionPDF = document.getElementById("reflexion");
const guiaEstiloPDF = document.getElementById("guiaEstilo");

prototipoPDF.addEventListener("click",() =>{
    window.open("../srcs/pdf/blog-prototipo.pdf", 'blank');
});

reflexionPDF.addEventListener("click",() =>{
    location.href ="./home.html";
});

guiaEstiloPDF.addEventListener("click",() =>{
    window.open("../srcs/pdf/guia-estilos.pdf",'blank');
});