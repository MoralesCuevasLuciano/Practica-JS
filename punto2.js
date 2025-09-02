/*
Usar filter() con una función anónima para obtener los productos cuyo stock sea mayor a 10. 
Luego, guardar el resultado en un nuevo arreglo productosEnStock y mostrarlo.
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

let productosEnStock = productos.filter(p => p.stock > 10);
console.log(productosEnStock);