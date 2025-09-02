/* Crear un arreglo de números y ordenarlo en forma ascendente con sort() y una arrow function. 
Ordenar los mismos números en forma descendente.
*/

let numeros = [8,4,6,1,7,9];

console.log("Numeros originales")
console.log(numeros);
numeros.sort((a,b) => a-b);
console.log("Numeros ordenados ascendentemente")
console.log(numeros);

numeros.sort((a,b) => b-a);
console.log("Numeros ordenados descendentemente")
console.log(numeros);