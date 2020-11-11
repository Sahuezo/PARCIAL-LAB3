//variables
const showmenu = document.querySelector('.MenuMovil');
const degradado = document.querySelector('.degradado');
const btnMenu = document.querySelector('.btnMenu');
const btnSalir = document.querySelector('.salir');
const enlaces = document.querySelectorAll('.link');

//Events
btnMenu.addEventListener('click', mostrarMenu);
btnSalir.addEventListener('click', ocultarMenu);
document.addEventListener('keydown', filtrotecla);
degradado.addEventListener('click', ocultarMenu);
enlaces.forEach(enlaces=>{
    enlaces.addEventListener('click',ocultarMenu);
})

//funciones
/*function filtrotecla(e) {
    console.log(e);
}*/

function filtrotecla(e){
    if(e.keyCode === 27){
        ocultarMenu();
    }
}

function mostrarMenu(){
    showmenu.style.left = '0';
    degradado.style.display = 'block';
    setTimeout(()=>{
        degradado.style.background = 'rgba(0,0,0, .75)';
    }, 10);    
}

function ocultarMenu(){
    showmenu.style.left = '-80%';
    degradado.style.background = 'rgba(0, 0, 0,)';
    setTimeout(()=>{
        degradado.style.display = 'none';
    }, 250);
}


