
function max2 (nro1, nro2){
    if (nro1>nro2){
        return nro1;
    }else{
        return nro2;
    }
}

var num1, num2;

num1=parseInt(prompt('Ingrese un número'));
num2=parseInt(prompt('Ingrese otro número'));

alert('El nro mayor es: ' + max2(num1, num2));
/*function saludo(){

    if(true){

        return 'HOLA';

    }else{

        alert('Hola');

     }

}
alert('error?' + saludo());*/