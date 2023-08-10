/*var cola = [1,2,3,4,5];

function miCola (arreglo, elemento){
    var agregado = arreglo.push(elemento);
    var removido = arreglo.shift();
    console.log(arreglo);
    return ("se ha agregado correctamente " + elemento + " y se ha removido de la lista: " + removido);

}

console.log(miCola(cola, 6));*/

//Funcion para calcular  puntajes em el golf
/*
function calculoGolf(par, golpes){
    if(golpes === 1){
        return "hole in one";
    }else if(golpes == par - 2){
        return "eagle";
    }else if(golpes == par - 1){
        return  "birdie";
    }else if(golpes == par){
        return "par";
    }else if(golpes == par + 1 ){
        return "bogey";
    }else if(golpes == par + 2){
        return "Double bogey";
    }else {
        return ("go home");
    }
}

console.log(calculoGolf(12, 14));
*/

//funcion simuladora del juego blackjak:

var conteo = 0;

function conteoCartas(carta){
    var decision;
    switch(carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        
        case 7:
        case 8:
        case 9:
            conteo = conteo + 0;
            break;

        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            conteo--;
            break;
        default:
            console.log("error de juego");
            break;
       
    }

    if(conteo <=0){
        return(conteo + " Esperar ");
    }else{
        return(conteo + " Apostar");
    }

    
}

console.log(conteoCartas(5));
console.log(conteoCartas("J"));
console.log(conteoCartas("A"));
