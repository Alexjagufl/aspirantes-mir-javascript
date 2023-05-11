// escribe la función suma acá
function suma(numero) {
    let resultado_suma = 0; 
    for(i=1;i<=numero;i++){
        resultado_suma = resultado_suma + i;
    }
    return resultado_suma;
}
// código de prueba
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120