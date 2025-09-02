/*
Usar some() para verificar si existe al menos un producto con stock igual a 0. 
Luego, usar every() para comprobar si todos los productos cuestan más de 100. Mostrar ambos resultados.
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
    {id: 10, nombre: "Parlante", precio: 10, stock: 0},
];

let hayStockCero = productos.some(p => p.stock === 0);

if(hayStockCero)
    console.log("Hay al menos un producto con stock 0");
else
    console.log("No hay ningún prodcuto con stock 0");

let todosSuperanCien = productos.every (p => p.precio > 100);

if(todosSuperanCien)
    console.log("Todos valen más de cien");
else
    console.log("No todos valen más de cien");