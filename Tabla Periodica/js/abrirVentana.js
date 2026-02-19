//codigo basico
//function abrirHidrogeno(){
    //abrimos ventana
    //window.open("elementos/hidrogeno.html", "Hidrogeno", "width=700,height=450");
//}

// function abrirFrancio(){
//     //abrimos ventana
//     window.open("elementos/Francio.html", "Francio", "width=700,height=450");
// }

// function abrirRadio(){
//     //abrimos ventana
//     window.open("elementos/Radio.html", "Radio", "width=700,height=450");
// }

// function abrirActinio(){
//     //abrimos ventana
//     window.open("elementos/Actinio.html", "Actinio", "width=700,height=450");
// }

// function abrirRutherfordio(){
//     //abrimos ventana
//     window.open("elementos/Rutherfordio.html", "Rutherfordio", "width=700,height=450");
// }

// function abrirDubnio(){
//     //abrimos ventana
//     window.open("elementos/Dubnio.html", "Dubnio", "width=700,height=450");
// }

// function abrirSeaborgio(){
//     //abrimos ventana
//     window.open("elementos/Seaborgio.html", "Seaborgio", "width=700,height=450");
// }

// function abrirbohrio(){
//     //abrimos ventana
//     window.open("elementos/bohrio.html", "bohrio", "width=700,height=450");
// }

// function abrir(){
//     //abrimos ventana
//     window.open("elementos/hidrogeno.html", "Hidrogeno", "width=700,height=450");
// }

//Ahora un mejor codigo un poco más profesional---------------

// const opciones="width=750, height=450"
// function abrirHidrogeno(){
//     //abrimos ventana
//     window.open("elementos/hidrogeno.html", "Hidrogeno",opciones);
// }

// function abrirLitio(){
//     //abrimos ventana
//     window.open("elementos/Litio.html", "Litio",opciones);
// }
//Ahora viene un código más profesional----------------
//Variables GLOBALES. Opciones para TODAS las ventanas
const ancho=750;
const alto=450;

//Calculamos la posicion de la ventana
const arriba= (window.screen.height - alto)/2;

const izquierda = (window.screen.width - ancho)/2;

//Definimos los párametros generales para la ventana
//Utilizamos Backtick que permite insertar expresiones Js dentro de cadenas

const opciones = `width=${ancho}, height=${alto}, top=${arriba}, left=${izquierda}`;

function abrirHidrogeno(){
    window.open("elementos/hidrogeno.html", "Hidrogeno", opciones)
}
//aqui sigue e superson
function abrirFrancio(){
    window.open("elementos/Francio.html", "Francio", opciones)
}
function abrirRadio(){
    window.open("elementos/Radio.html", "Radio", opciones)
}
function abrirActinio(){
    window.open("elementos/Actinio.html", "Actinio", opciones)
}
function abrirRutherfordio(){
    //abrimos ventana
  window.open("elementos/Rutherfordio.html", "Rutherfordio", opciones)
}
function abrirDubnio(){
    //abrimos ventana
     window.open("elementos/Dubnio.html", "Dubnio", opciones)
}
function abrirSeaborgio(){
   //abrimos ventana
   window.open("elementos/Seaborgio.html", "Seaborgio", opciones)
}
function abrirBohrio(){
    //abrimos ventana
  window.open("elementos/Bohrio.html", "Bohrio", opciones)
}
function abrirHassio(){
    //abrimos ventana
  window.open("elementos/Hassio.html", "Hassio", opciones)
}
function abrirMeitnerio(){
    //abrimos ventana
  window.open("elementos/Meitnerio.html", "Meitnerio", opciones)
}