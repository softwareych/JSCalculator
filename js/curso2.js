
/* Programa modular con funciones */
do{
    var op=parseInt(prompt('Ingrese una opción: \n1.- Capicua \n2.- Calculadora \n3.- Salir'));

    switch(op){
        case 1:
            capicua();
            break;
        case 2:
            calculadora();
            break;
        case 3:
            alert('Gracias');
            break;
        default:
            alert('Error Opción inválida, intente de nuevo');
            break;
    }
}while(op!=3);

function capicua(){
    do{
        var palabra = prompt('Ingrese una palabra');
        var bandera = true;

        for (var i = 0; i < palabra.length; i++){
            if (palabra.substring(i, i+1) != palabra.substring(palabra.length-i-1, palabra.length-i)){
                bandera=false;
                i=palabra.length;
                alert('La palabra no es Capicua');

            };
        };

        if (bandera){
            alert('La palabra es Capicua');
        }

        var continuar = confirm('¿Quiere ingresar otra palabra?');
    }while(continuar);
}

function calculadora(){
    var opcion= parseInt(prompt('Calculadora\n 1.- Sumar\n 2.- Restar \n 3.- Multiplicar \n 4.- Dividir'));
    if (opcion < 1 || opcion > 4){
        alert('Error. Opción inválida');
    }else{
        var nro1 =parseInt(prompt('Ingrese el primer número: '));
        var nro2 =parseInt(prompt('Ingrese el segundo número: '));
        
        var resultado;
    
        switch(opcion){
            case 1:
                resultado = nro1 + nro2;
                alert('El resultado de la suma es: ' + resultado);
                break;
            case 2:
                resultado = nro1 - nro2;
                alert('El resultado de la resta es: ' + resultado);
                break;
            case 3:
                resultado = nro1 * nro2;
                alert('El resultado de la multiplicación es: ' + resultado);
                break;
            case 4:
                resultado = nro1 / nro2;
                alert('El resultado de la división es: ' + resultado);
                break;
    
        }
    }
}
