/*
Usar reduce() con una arrow function para calcular el precio total de todos los productos. 
Luego, realizar una función anónima que calcule el promedio de precios.
*/
let productos = [
    {id: 1, nombre: "Teclado", precio: 15000, stock: 100},
    {id: 2, nombre: "Mouse", precio: 10000, stock: 5},
    {id: 3, nombre: "Monitor", precio: 20000, stock: 3},
    {id: 4, nombre: "Audífono", precio: 12000, stock: 8},
    {id: 5, nombre: "Parlante", precio: 18000, stock: 6},
    {id: 6, nombre: "Teclado", precio: 15000, stock: 10},
    {id: 7, nombre: "Mouse", precio: 10000, stock: 5},
    {id: 8, nombre: "Monitor", precio: 20000, stock: 3},
    {id: 9, nombre: "Audífono", precio: 12000, stock: 8},
    {id: 10, nombre: "Parlante", precio: 18000, stock: 6},
]

const precioTotalProductos = productos.reduce((acumulador, productos) => acumulador + productos.precio, 0);
console.log("Precio total de productos")
console.log("$", precioTotalProductos);
const promedio = precioTotalProductos / (productos.length);
console.log("Promeido de precios con cantidad de productos")
console.log(promedio)