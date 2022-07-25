
let factorial = 0;
let input = prompt("Ingresar una numero para calcular el factorial.\nSi desea salir ingresar 'exit'");

while (input!="exit"){
    factorial=input;
    for(let i=1;i<input;i++){

        factorial = factorial*i;
    
    }
    alert("El factorial de " + input + " es: "+factorial);
    input = prompt("Ingresar una numero para calcular el factorial.\nSi desea salir ingresar 'exit'");
}




