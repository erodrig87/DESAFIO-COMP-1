
let input = prompt("Ingresar una numero para calular el factorial, si desea salir ingresar 'exit'");

factorial=input;
while (input!="exit"){
    for(let i=1;i<input;i++){

        factorial = factorial*i;
    
    }
    alert("El factorial de " + input + " es: "+factorial);

    input = prompt("Ingresar una numero para calular el factorial, si desea salir ingresar 'exit'");
    factorial=input;
}




