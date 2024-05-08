let slideRight = document.getElementById('slide-right');//comezamos declarando variable para darle funcion
let slideLeft = document.getElementById('slide-left');//comezamos declarando variable para darle funcion

const itemsLenght = (slideLeft.querySelectorAll('.slide').length - 1) * 100;//añadimos la constante que hara que el slider tenga un moviemiento
slideLeft.style.transform = `translateY(-${itemsLenght}vh)`;

let trayectoRight = 100;//declaramos otras variables para indicar las trayectorias al momento de cambiar de imagen 
let trayectoLeft = -200;

document.getElementById('arrow-up').addEventListener('click', onUp);//colocamos que el mause haga la accion que se pide hacia arriba
document.getElementById('arrow-down').addEventListener('click', onDown);//colocamos que el mause haga la accion que se pide hacia abajo

function onUp(){//agregamos la siguiente para hacer la funcion de la animacion para subir 
    startUpAnimation();//animacion al subir
    startDownAnimation()//animacion al bajar
}
function onDown(){//agregamos la siguiente para hacer la funcion de la animacion para bajar
    startDownAnimation();//colocamos para bajar
    startUpAnimation();//colocamos para subir

}

function startDownAnimation(){//tomamos la funcion para darle instrucciones
    trayectoLeft += 100;//colocamos la trayectoria
    slideLeft.style.transform =  `translateY(${trayectoLeft}vh)`;//de que forma cambiaran las imagenes al bajar
    if(trayectoLeft == 0){//trayectoria para bajra
        trayectoLeft = -300;
    }
}
function startUpAnimation(){//tomamos la funcion para darle instrucciones
    slideRight.style.transform =  `translateY(-${trayectoRight}vh)`;//de que forma cambiaran las imagenes al subir
    trayectoRight += 100;//colocamos la trayectoria
    if(trayectoRight == 300){//trayectoria para subir
        trayectoRight = 0;
    }
}