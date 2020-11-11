//variables
const imagenes = document.querySelectorAll('.imagen');
const lightbox = document.querySelector('#lightbox');
const btnExit = document.querySelector('.exit');
const boxImage = document.querySelector('#boxImage');
const imagenLightbox = document.querySelector('#imagenLightbox');
const nombreImagen = document.querySelector('#mynameis');


//eventos
 
imagenes.forEach( imagen =>{
    imagen.addEventListener('click', seleccionarImagen);
})
btnExit.addEventListener('click', ocultarLightbox);
document.addEventListener('keydown', filtrartecla);
document.addEventListener('click', filtrarElemento);


//funciones
 function seleccionarImagen(e){
     const imagen = e.target.children[0];
     const src = imagen.getAttribute('src');
     const nombre = imagen.getAttribute('mynameis');
     mostrarLightbox(src, nombre);
     //console.log(src,nombre);
 }

 function filtrartecla(e){
     e.keycode === 27 && ocultarLightbox();
 }

 function filtrarElemento(e){
     e.target.id === 'lightbox' && ocultarLightbox();
 }
//Animar el bloque de lightbox
 function mostrarLightbox(src, nombre){
        lightbox.style.display = 'flex';
        setTimeout(()=>{
            lightbox.style.opacity = '9';
        }, 10);
}

//Animar el bloque de la imagen 
setTimeout(()=>{
    boxImage.style.opacity = '1'
}, 250);

//asignar valores
imagenLightbox.setAttribute('src', src);
nombreImagen.textContent = `Nombre: ${nombre}`;

function ocultarLightbox(){
    boxImage.style.opacity = '0';

    setTimeout(()=>{
        lightbox.style.opacity = '0';
    }, 250);

    setTimeout(()=>{
        lightbox.style.display = 'none';
    }, 500);
}




//NOTAS: 

/*
Para saber a lo que le estoy dando clic pued usar la función
document.addEventListener('click',(e)=>
console.log(e.target))

//-->> recuerda InerhtML interpreta texto 
function sleccionarImagen(e) {
    const imagen = e.target.innerHTML
    console.log(imagen)
    
}
*/ 
