
/**OJO, HE OPTIMIZADO EL CÓDIGO PARA QUE SOLO SE TENGA QUE AÑADIR LA URL DE CADA PÁGINA. PERO HAY 
 * QUE HACERLO DE MANERA ORDENADA PARA QUE ESTE PUEDA COINCIDIR LA URL CON LA PÁGINA CORRESPONDIENTE*/
opcionesMenu = ["indexDropdowns.html", "indexNavs.html","indexScrollSpy.html","indexListGroups.html",
    "indexFormulario.html"];
opciones = document.getElementsByTagName("article");

let loadPages = () => {
    var cont = 0;
    for (const articulo of opciones)
    {
        let ubicacion = opcionesMenu[cont];
        
        articulo.addEventListener('click', () => {
            location.href = "./funciones/"+ubicacion;
        });

        cont ++;
        
    }
}
